const { Types } = require('../database/utils');

module.exports = {
  User: {
    Schema: {
      firstName: { type: String },
      lastName: { type: String },
      records: [{ type: Types.ObjectId, ref: 'UserRecord' }]
    }
  },
  UserRecord: {
    Schema: {
      type: {
        type: String,
        enum: { values: ['Prospect', 'Student', 'Instructor', 'TA'] },
        default: 'Prospect',
        required: true
      },
      recordId: { type: Types.ObjectId, required: true }
    }
  }
};
