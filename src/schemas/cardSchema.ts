import joi, { Schema } from 'joi';

const cardSchema: Schema = joi.object({
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
  number: joi.string()
    .pattern(/^[0-9 ]+$/)
    .max(20)
    .required()
    .messages({
      'string.base': 'Number must be text',
      'string.pattern.base': 'Number must only contain numbers and spaces',
      'string.max': 'Number must be less than 20 characters long',
      'any.required': 'Number field is required'
    }),
  holderName: joi.string()
    .pattern(/^[A-Z ]+$/)
    .max(50)
    .required()
    .messages({
      'string.base': 'Holder name must be text',
      'string.pattern.base': 'Holder name must only contain capital letters and spaces',
      'string.max': 'Holder name must be less than 50 characters long',
      'any.required': 'Holder name field is required'
    }),
  expirationDate: joi.string()
    .pattern(/^[0-9]{2}\/[0-9]{2}/)
    .required()
    .messages({
      'string.base': 'Expiration date must be text',
      'string.pattern.base': 'Expiration date must be on the MM/YY format',
      'any.required': 'Expiration date field is required'
    }),
  securityCode: joi.string()
    .pattern(/^[0-9]{3}$/)
    .required()
    .messages({
      'string.base': 'Security code must be text',
      'string.pattern.base': 'Security code must be a three digits number',
      'any.required': 'Security code field is required'
    }),
  password: joi.string()
    .pattern(/^[0-9]{4,8}$/)
    .required()
    .messages({
      'string.base': 'Password must be text',
      'string.pattern.base': 'Password must be a four to eight digits number',
      'any.required': 'Password field is required'
    }),
  isVirtual: joi.boolean()
    .required()
    .messages({
      'boolean.base': 'Is virtual must be a boolean value',
      'any.required': 'Is virtual field is required'
    }),
  cardType: joi.string()
    .valid('credit', 'debit', 'both')
    .required()
    .messages({
      'string.base': 'Card type must be text',
      'any.only': 'Card type must be either "credit", "debit" or "both"',
      'any.required': 'Card type field is required'
    })
});

export default cardSchema;