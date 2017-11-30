module.exports = {
  objectFromExistingFields: fields =>
    Object.keys(fields).reduce((obj, f) => {
      if (fields[f]) obj[f] = fields[f];
      return obj;
    }, {}),
  dbDocumentUpdateFromExistingFields: (dbDoc, fields) =>
    Object.keys(fields).reduce((doc, f) => {
      if (fields[f] && doc[f]) doc[f] = fields[f];
      return doc;
    }, dbDoc)
};
