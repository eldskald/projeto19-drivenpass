import joi, { Schema } from 'joi';

const documentSchema: Schema = joi.object({
  documentType: joi.string()
    .valid('rg', 'cnh')
    .required()
    .messages({
      'string.base': 'Document type must be text',
      'any.only': 'Document type must be either "rg" or "cnh"',
      'any.required': 'Document type field required'
    }),
  fullName: joi.string()
    .max(50)
    .required()
    .messages({
      'string.base': 'Full name must be text',
      'string.max': 'Full name must be less than 50 characters long',
      'any.required': 'Full name field required'
    }),
  emissionDate: joi.string()
    .pattern(/^[0-9]{2}\/[0-9]{2}/)
    .required()
    .messages({
      'string.base': 'Emission date must be text',
      'string.pattern.base': 'Emission date must be on the MM/YY format',
      'any.required': 'Emission date field is required'
    }),
  expirationDate: joi.string()
    .pattern(/^[0-9]{2}\/[0-9]{2}/)
    .required()
    .messages({
      'string.base': 'Expiration date must be text',
      'string.pattern.base': 'Expiration date must be on the MM/YY format',
      'any.required': 'Expiration date field is required'
    }),
  registryNumber: joi.string()
    .pattern(/^[0-9 .-]+$/)
    .max(20)
    .required()
    .messages({
      'string.base': 'Registry number must be text',
      'string.pattern.base': 'Registry number must only contain numbers, spaces, dots and dashes',
      'string.max': 'Registry number must be less than 20 characters long',
      'any.required': 'Registry number field is required'
    }),
  emittedBy: joi.string()
    .max(50)
    .required()
    .messages({
      'string.base': 'Emitted by must be text',
      'string.max': 'Emitted by must be less than 50 characters long',
      'any.required': 'Emitted by field required'
    })
});

export default documentSchema;