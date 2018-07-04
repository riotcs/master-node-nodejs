import { scheduleJob } from "node-schedule";
import { waterfall, eachSeries } from "async";
import { dbs } from "../db/db";

import ETHHelper from '../helpers/eth';

export const payments = (message) => {
  let hour = 0;
  let minute = 0;
  let db = null;
  let paidCount = 0;
  let unPaidCount = 0;

  if (message === 'start') {
    let j = scheduleJob('*/45 * * * * *', () => {
      let currentTime = new Date()
      let timestamp = Date.now() / 1000
      if (global.db) {
        waterfall([
          (next) => {
            if (currentTime.getHours() == hour && currentTime.getMinutes() == minute) {
              db = global.db
              next();
            } else {
              next({}, null)
            }
          }, (next) => {
            db.collection('connections').aggregate([{
              '$match': {
                'start_time': {
                  '$gte': timestamp - (24 * 60 * 60)
                }
              }
            }, {
              '$group': {
                '_id': '$client_addr'
              }
            }]).toArray((err, result) => {
              next(null, result)
            })
          }, (result, next) => {
            eachSeries(result, (addr, iterate) => {
              if (addr['_id']) {
                ETHHelper.getVpnUsage(addr['_id'], (err, usage) => {
                  if (!err) {
                    if (usage) {
                      let sessions = usage['sessions'];
                      sessions.map((session, index) => {
                        if (session['timestamp']) {
                          if (session['is_paid']) {
                            paidCount += parseFloat(session['amount'])
                          } else {
                            unPaidCount += parseFloat(session['amount'])
                          }
                        };
                      })
                    } else {
                      next()
                    }
                  }
                })
              }
              iterate()
            }, () => {
              db.collection('payments').update({
                'timestamp': timestamp
              }, {
                  $set: {
                    'paid_count': paidCount,
                    'unpaid_count': unPaidCount
                  }
                }, {
                  'upsert': true
                })
              next()
            })
          }
        ], (err, resp) => {
          console.log('payments')
        })
      }

    })
  }
}