import joi, { Schema } from 'joi';

const credentialSchema: Schema = joi.object({
  label: joi.string()
    .pattern(/^[a-zA-Z0-9 ]+$/)
    .max(50)
    .required()
    .messages({
      'string.base': 'Label must be text',
      'string.pattern.base': 'Label must only contain letters and numbers',
      'string.max': 'Label must be less than 50 characters long',
      'any.required': 'Label field is required'
    }),
  url: joi.string()
    .uri()
    .required()
    .messages({
      'string.base': 'URL must be text',
      'string.uri': 'URL must be a valid URI',
      'any.required': 'URL field is required'
    }),
  credential: joi.string()
    .required()
    .messages({
      'string.base': 'Credential must be text',
      'any.required': 'Credential field is required'
    }),
  password: joi.string()
    .required()
    .messages({
      'string.base': 'Password must be text',
      'any.required': 'Password field is required'
    })
});

export default credentialSchema;