const config = {
    appConfig: {
      port: process.env.APP_PORT || 4000,
      host: process.env.APP_HOST || '0.0.0.0'
    },
    dbConfig: {
      url: process.env.DB_URL,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      dbName: process.env.DB_NAME
      

    }
  }
  
  module.exports = config