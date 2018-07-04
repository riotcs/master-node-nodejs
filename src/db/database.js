import mongoose from "mongoose";
import chalk from "chalk";

let uri = `mongodb://localhost:27017/sentinel`;

export const dbo = () => {
  mongoose.connect(uri, (err, db) => {
    if (err) {
      throw err
    } else {
      console.log(
        chalk.green.bold(
          `
          MongoDB connected Successfully`
        )
      );
    }
  })
}

const insert = (Obj, cb) => {
  Obj.save((err, resp) => {
    if (err) cb(err, null)
    else cb(null, resp)
  })
}

export default {
  dbo, insert
}
