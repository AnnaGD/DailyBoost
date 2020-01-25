

//311 wk7_day1
const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: '104.154.57.78',
        user: 'root',
        password: "ghMikHPvDM8eE1Nc",
        database: 'admin' 
      }

      // if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_CLOUD_INSTANCE) {
      //   console.log(`connect socket: ${process.env.REACT_APP_CLOUD_INSTANCE}`)
      //   config.socketPath = `/cloudsql/${process.env.REACT_APP_CLOUD_INSTANCE}`
      // }

      this.pool = mysql.createPool(config)
      // console.log(this.pool)

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;
