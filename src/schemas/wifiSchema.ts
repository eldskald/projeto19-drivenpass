import joi, { Schema } from 'joi';

const wifiSchema: Schema = joi.object({
  label: joi.string()
    .pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+$/)
    .max(50)
    .required()
    .messages({
      'string.base': 'Label must be text',
      'string.pattern.base': 'Label must only contain letters, numbers and spaces',
      'string.max': 'Label must be less than 50 characters long',
      'any.required': 'Label field is required'
    }),
  name: joi.string()
    .max(50)
    .required()
    .messages({
      'string.base': 'Name must be text',
      'string.max': 'Name must be less than 50 characters long',
      'any.required': 'Name field is required'
    }),
  password: joi.string()
    .required()
    .messages({
      'string.base': 'Password must be text',
      'any.required': 'Password field is required'
    })
});

export default wifiSchema;