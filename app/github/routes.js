const { createSprint } = require('./controllers');
// const { authorizeRoute } = require('../services').Auth

module.exports = {
  '/github': {
    post: { '/sprint/create': createSprint }
  }
};
