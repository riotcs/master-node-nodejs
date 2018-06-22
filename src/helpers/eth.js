import md5 from 'md5'
import redis from 'redis'
import sleep from 'sleep'
import async from 'async'

import { Eth_manager } from '../eth/eth';
import { ERC20Manager } from '../eth/erc20';
import { VpnServiceManager } from '../eth/vpn_contract';
import { LIMIT_10MB, LIMIT_100MB, SESSIONS_SALT } from '../config/vars';
import { ADDRESS as COINBASE_ADDRESS, PRIVATE_KEY as COINBASE_PRIVATE_KEY } from '../config/eth';

let redisClient = redis.createClient();

const getEncodedSessionId = async (accountAddr, index, cb) => {
  accountAddr = accountAddr.toString('utf8');
  index = index.toString();
  index = index.toString('utf8')
  let sessionId = await md5(accountAddr + index + SESSIONS_SALT)
  return cb(sessionId)
}

export const createAccount = (password, cb) => {
  Eth_manager['main'].createAccount(password, (err, accountDetails) => {
    cb(err, accountDetails);
  });
}

export const getAccountAddress = (privateKey, cb) => {
  Eth_manager['main'].getAddress(privateKey,
    (err, address) => {
      let accountAddress = address.substr(2)
      cb(null, accountAddress)
    })
}

export const getTxReceipt = (txHash, net, cb) => {
  if (net === 'main') {
    Eth_manager['main'].getTransactionReceipt(txHash, (err, receipt) => {
      cb(err, receipt)
    })
  }
  else if (net === 'rinkeby') {
    Eth_manager['rinkeby'].getTransactionReceipt(txHash, (err, receipt) => {
      cb(err, receipt)
    })
  }
}

export const getTx = (txHash, net, cb) => {
  if (net === 'main') {
    Eth_manager['main'].getTransaction(txHash, (err, receipt) => {
      cb(err, receipt)
    })
  }
  else if (net === 'rinkeby') {
    Eth_manager['rinkeby'].getTransaction(txHash, (err, receipt) => {
      cb(err, receipt)
    })
  }
}

export const getTxCount = (accountAddr, net, cb) => {
  if (net == 'main') {
    Eth_manager['main'].getTransactionCount(accountAddr, (err, txCount) => {
      cb(txCount)
    })
  } else if (net == 'rinkeby') {
    Eth_manager['rinkeby'].getTransactionCount(accountAddr, (err, txCount) => {
      cb(txCount)
    })
  }
}

export const getValidNonce = (accountAddr, net, cb) => {
  let key = accountAddr + '_' + net;
  let previousNonce = redisClient.get(key);
  let error = null;
  let nonce = 0;

  if (previousNonce)
    previousNonce = parseInt(previousNonce);

  if (net == 'main') {
    Eth_manager['main'].getTransactionCount(accountAddr, (err, nonce) => {
      if (!err && (!previousNonce || nonce > previousNonce)) {
        redisClient.set(key, nonce)
        return cb(nonce)
      } else {
        sleep.sleep(1)
        return getValidNonce(accountAddr, net, cb)
      }
    })
  } else if (net == 'rinkeby') {
    Eth_manager['rinkeby'].getTransactionCount(accountAddr, (err, nonce) => {
      if (!err && (!previousNonce || nonce > previousNonce)) {
        redisClient.set(key, nonce)
        return cb(nonce)
      } else {
        sleep.sleep(1)
        return getValidNonce(accountAddr, net, cb)
      }
    })
  }
}

export const getBalances = (accountAddr, cb) => {
  let balances = {
    main: {
      eths: null,
      sents: null
    },
    test: {
      eths: null,
      sents: null
    }
  }

  try {
    Eth_manager['main'].getBalance(accountAddr, (err, balance) => {
      balances.main.eths = balance
      ERC20Manager['main']['SENT'].getBalance(accountAddr, (err, balance) => {
        balances.main.sents = balance
        Eth_manager['rinkeby'].getBalance(accountAddr, (err, balance) => {
          balances.test.eths = balance
          ERC20Manager['rinkeby']['SENT'].getBalance(accountAddr, (err, balance) => {
            balances.test.sents = balance
            cb(null, balances);
          })
        })
      })
    })
  } catch (error) {
    cb(error, null)
  }
}

export const transfer = (fromAddr, toAddr, amount, symbol, privateKey, net, cb) => {
  if (symbol == 'ETH') {
    transferEths(fromAddr, toAddr, amount, privateKey, net,
      (err, resp) => {
        cb(err, resp)
      })
  } else {
    transferErc20(fromAddr, toAddr, amount, symbol, privateKey, net,
      (err, resp) => {
        cb(err, resp);
      })
  }
}

export const transferErc20 = (fromAddr, toAddr, amount, symbol, privateKey, net, cb) => {
  getValidNonce(fromAddrm, net, (nonce) => {
    ERC20Manager[net][symbol].transferAmount(toAddr, amount, privateKey, nonce, (err, txHash) => {
      cb(err, txHash)
    })
  })
}

export const transferEths = (fromAddr, toAddr, amount, privateKey, net, cb) => {
  if (net == 'main') {
    Eth_manager['main'].transferAmount(fromAddr, toAddr, amount, privateKey, (err, txHash) => {
      cb(err, txHash)
    })
  } else if (net == 'rinkeby') {
    Eth_manager['rinkeby'].transferAmount(fromAddr, toAddr, amount, privateKey, (err, txHash) => {
      cb(err, txHash)
    })
  }
}

export const rawTransaction = (txData, net, cb) => {
  if (net == 'main') {
    Eth_manager['main'].sendRawTransaction(txData,
      (err, txHash) => {
        cb(err, txHash);
      })
  }
  else if (net == 'rinkeby') {
    Eth_manager['rinkeby'].sendRawTransaction(txData,
      (err, txHash) => {
        cb(err, txHash);
      })
  }
}

export const getInitialPayment = (accountAddr, cb) => {
  VpnServiceManager.getInitialPayment(accountAddr, (err, isPayed) => {
    cb(err, isPayed)
  })
}

export const getDueAmount = (accountAddr, cb) => {
  VpnServiceManager.getDueAmount(accountAddr,
    (err, dueAmount) => {
      cb(err, dueAmount);
    });
}

export const getVpnSessionCount = (accountAddr, cb) => {
  VpnServiceManager.getVpnSessionCount(accountAddr, (err, sessions) => {
    cb(err, sessions);
  })
}

export const getLatestVpnUsage = (accountAddr, cb) => {
  getVpnSessionCount(accountAddr, (err, sessionsCount) => {
    if (!err && sessionsCount > 0) {
      getEncodedSessionId(accountAddr, sessionsCount - 1, (sessionId) => {
        VpnServiceManager.getVpnUsage(accountAddr, sessionId, (err, _usage) => {
          if (!err) {
            let usage = {
              'id': sessionId,
              'account_addr': _usage[0].toString().toLowerCase(),
              'received_bytes': _usage[1],
              'session_duration': _usage[2],
              'amount': _usage[3],
              'timestamp': _usage[4],
              'is_paid': _usage[5]
            }
            cb(null, usage)
          } else {
            cb(err, null)
          }
        })
      })
    }
  })
}

export const getVpnUsage = async (accountAddr, cb) => {
  let usage = {
    'due': 0,
    'stats': {
      'received_bytes': 0,
      'duration': 0,
      'amount': 0
    },
    'sessions': []
  }
  VpnServiceManager.getVpnSessionCount(accountAddr, (err, sessions) => {
    if (!err) {
      async.times(sessions, (index, next) => {
        getEncodedSessionId(accountAddr, index, (sessionId) => {
          VpnServiceManager.getVpnUsage(accountAddr, sessionId, (error, _usage) => {
            if (!error) {
              if (!_usage[5])
                usage['due'] += _usage[3]
              usage['stats']['received_bytes'] += parseInt(_usage[1])
              usage['stats']['duration'] += parseInt(_usage[2])
              usage['stats']['amount'] += parseInt(_usage[3])
              usage['sessions'].push({
                'id': sessionId,
                'account_addr': _usage[0],
                'received_bytes': _usage[1],
                'session_duration': _usage[2],
                'amount': _usage[3],
                'timestamp': _usage[4],
                'is_paid': _usage[5]
              })
              next()
            } else {
              return cb(error, null)
            }
          })
        })
      }, () => {
        return cb(null, usage)
      })
    } else {
      cb(err, null)
    }
  })
}

export const payVpnSession = (fromAddr, amount, sessionId, net, txData, paymentType, cb) => {
  let errors = []
  let txHashes = []

  rawTransaction(txData, net, (err1, txHash1) => {
    if (!err1) {
      txHashes.push(txHash1)
      getValidNonce(COINBASE_ADDRESS, 'rinkeby', (nonce) => {
        if (paymentType == 'init') {
          VpnServiceManager.setInitialPayment(fromAddr, nonce, (err2, txHash2) => {
            if (!err2) {
              txHashes.push(txHash2)
              return cb(errors, txHashes)
            } else {
              errors.push(err2)
              return cb(errors, txHashes)
            }
          })
        } else if (paymentType == 'normal') {
          VpnServiceManager.payVpnSession(fromAddr, amount, sessionId, nonce, (err2, txHash2) => {
            if (!err2) {
              txHashes.push(txHash2)
              return cb(errors, txHashes)
            } else {
              errors.push(err2)
              return cb(errors, txHashes)
            }
          })
        } else {
          return cb(errors, txHashes)
        }
      })
    } else {
      errors.push(err1)
      return cb(errors, txHashes);
    }
  })
}

export const addVpnUsage = (fromAddr, toAddr, sentBytes, sessionDuration, amount, timeStamp, cb) => {
  let err = null;
  let txHash = null;
  let makeTx = false;
  let sessionId = null;
  let _usage = null;

  sentBytes = parseInt(sentBytes);
  sessionDuration = parseInt(sessionDuration);
  amount = parseInt(amount);

  async.waterfall([
    (next) => {
      getVpnSessionCount(toAddr, (err, sessionsCount) => {
        if (!err) {
          getEncodedSessionId(toAddr, sessionsCount, (sessId) => {
            sessionId = sessId;
            next();
          })
        } else {
          next();
        }
      })
    }, (next) => {
      global.db.collection('usage').findOne({
        'from_addr': fromAddr,
        'to_addr': toAddr
      }, (err, usage) => {
        _usage = usage
        next()
      })
    }, (next) => {
      if (!_usage) {
        if (sentBytes > LIMIT_10MB && sentBytes < LIMIT_100MB) {
          global.db.collection('usage').insertOne({
            'from_addr': fromAddr,
            'to_addr': toAddr,
            'sent_bytes': sentBytes,
            'session_duration': sessionDuration,
            'amount': amount,
            'timestamp': timeStamp
          }, (err, resp) => {
            next()
          })
        } else if (sentBytes >= LIMIT_100MB) {
          makeTx = true;
          next()
        } else {
          next()
        }
      } else if (parseInt(_usage['sent_bytes']) + sentBytes < LIMIT_100MB) {
        global.db.collection('usage').findOneAndUpdate({
          'from_addr': fromAddr,
          'to_addr': toAddr
        }, {
            '$set': {
              'sent_bytes': _usage['sent_bytes'] + sentBytes,
              'session_duration': _usage['session_duration'] + sessionDuration,
              'amount': _usage['amount'] + amount,
              'timestamp': timeStamp
            }
          }, (err, resp) => {
            next()
          })
      } else {
        sentBytes = parseInt(_usage['sent_bytes']) + sentBytes;
        sessionDuration = parseInt(_usage['session_duration']) + sessionDuration;
        amount = int(_usage['amount']) + amount;
        make_tx = true;
        global.db.collection('usage').findOneAndDelete({
          'from_addr': fromAddr,
          'to_addr': toAddr
        }, (err, resp) => {
          next()
        })
      }
    }, (next) => {
      if (makeTx) {
        getValidNonce(COINBASE_ADDRESS, 'rinkeby', (nonce) => {
          VpnServiceManager.addVpnUsage(fromAddr, toAddr, sentBytes, sessionDuration, amount, timeStamp, sessionId, nonce,
            (err, txHash) => {
              next(err, txHash)
            })
        })
      } else {
        next(null, null)
      }
    }
  ], (err, resp) => {
    cb(err, resp);
  })
}

export const free = (toAddr, eths, sents, cb) => {
  let errors = [], txHashes = []

  let PRIVATE_KEY = Buffer.from(COINBASE_PRIVATE_KEY, 'hex');
  transferEths(COINBASE_ADDRESS, toAddr, eths, PRIVATE_KEY, 'rinkeby', (err, txHash) => {
    if (!err) {
      txHashes.push(txHash);
      transferSents(COINBASE_ADDRESS, toAddr, eths, PRIVATE_KEY, 'rinkeby', (err, txHash) => {
        if (!err) {
          txHashes.push(txHash);
          cb(errors, txHashes);
        } else {
          errors.push(errors);
          cb(errors, txHashes);
        }
      })
    } else {
      errors.push(err);
      cb(errors, txHashes);
    }
  });
}