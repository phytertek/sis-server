module.exports = {
  // App Components
  Components: {
    Github: {
      Schema: 'Add comments here',
      Routes: 'Add comments here',
      Services: 'Add comments here'
    },
    Auth: {
      Schema: 'authentication user schema',
      Services: 'authenticatedRoute and decodeToken',
      Routes: {
        '/auth': [
          'POST /register - new user registration',
          'POST /update - username and password update',
          'POST /login - user login',
          'GET /logout - user logout'
        ],
        '/admin': [
          'POST /makeSystemAdmin - create first System Admin',
          'POST /add-admin-route - add user as a Route Admin'
        ]
      }
    },
    User: {
      Schema: 'base user schema',
      Routes: {
        '/user': [
          "GET /all - returns all user's",
          'GET /one - returns a user by query params',
          'GET /current - returns currently logged in user'
        ]
      }
    }
  },
  // App Configuration
  Config: {
    Level: process.env.NODE_ENV || 'development',
    Name: process.env.NAME || 'server',
    Host: process.env.HOST || 'http://localhost',
    Port: process.env.PORT || 3333,
    DatabaseName: process.env.DBNAME || 'server Dev DB',
    DatabaseURI:
      process.env.DB_URI ||
      'mongodb://student:student@ds147544.mlab.com:47544/lambda-projects',
    JWTSecret: process.env.JWT_SECRET || 'e0COB<#tup&7yojCDr`)ZgBqe]3lm|iJ',
    BcryptCost: process.env.BCRYPT_COST || 11
  }
};
