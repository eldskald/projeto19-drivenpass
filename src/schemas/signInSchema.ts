import joi, { Schema } from 'joi';

const signInSchema: Schema = joi.object({
  email: joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email must be a text',
      'string.email': 'Email must be a valid email',
      'any.required': 'Email field is required'
    }),
  password: joi.string()
    .required()
    .messages({
      'string.base': 'Password must be a text',
      'any.required': 'Password field is required'
    })
});

export default signInSchema;