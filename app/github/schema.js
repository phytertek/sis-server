const { Types } = require('../database/utils');

module.exports = {
  Sprint: {
    Schema: {
      url: {
        type: String,
        required: true,
        unique: true
      },
      title: { type: String },
      testsAvailable: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  },
  StudentSprint: {
    Schema: {
      user: { type: Types.ObjectId, ref: 'User' },
      url: { type: String },
      submissions: [
        {
          date: {
            type: Date,
            required: true,
            default: Date.now()
          },
          testsPass: {
            type: Boolean
          }
        }
      ]
    }
  }
};
