import joi, { Schema } from 'joi';

const signUpSchema: Schema = joi.object({
  email: joi.string()
    .email()
    .max(50)
    .required()
    .messages({
      'string.base': 'Email must be a text',
      'string.email': 'Email must be a valid email',
      'string.max': 'Email must be less than 50 characters long',
      'any.required': 'Email field is required'
    }),
  password: joi.string()
    .min(10)
    .required()
    .messages({
      'string.base': 'Password must be a text',
      'string.min': 'Password must be at least 10 characters long',
      'any.required': 'Password field is required'
    })
});

export default signUpSchema;