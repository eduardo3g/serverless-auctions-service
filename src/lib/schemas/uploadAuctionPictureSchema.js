const schema = {
  properties: {
    body: {
      type: 'string',
      minLength: 1,
      pattern: '\=$' // check if string ends with '=' sign
    },
  },
  required: ['body'],
};

export default schema;