const config = {
    appConfig: {
      port: process.env.APP_PORT || 4000,
      host: process.env.APP_HOST || '0.0.0.0'
    },
    dbConfig: {
      url: process.env.DB_URL,
      
      

    }
  }
  
  module.exports = config