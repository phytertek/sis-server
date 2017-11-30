// const 'Insert Model Name' = require('../database').'Insert Model Name'
const { Sprint } = require('../database');
const { requireFields } = require('../common/validation');
const { objectFromExistingFields } = require('../common/utils');
const { sendUserError } = require('../common/errors');

module.exports = {
  createSprint: async (req, res) => {
    try {
      const { url, title, testsAvailable } = req.body;
      requireFields({ url, title });
      const sprint = await new Sprint(
        objectFromExistingFields({ url, title, testsAvailable })
      ).save();
      res.json({ success: true, sprint });
    } catch (error) {
      sendUserError(error, res);
    }
  }
};
