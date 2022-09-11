import joi, { Schema } from 'joi';

const newUserSchema: Schema = joi.object({
  email: joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email must be a text',
      'string.email': 'Email must be a valid email',
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

export default newUserSchema;