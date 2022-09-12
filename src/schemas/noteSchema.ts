import joi, { Schema } from 'joi';

const noteSchema: Schema = joi.object({
  title: joi.string()
    .max(50)
    .required()
    .messages({
      'string.base': 'Title must be text',
      'string.max': 'Title must be less than 50 characters long',
      'any.required': 'Title field is required'
    }),
  note: joi.string()
    .max(1000)
    .required()
    .messages({
      'string.base': 'Note must be text',
      'string.max': 'Note must be less than 1000 characters long',
      'any.required': 'Note field is required'
    })
});

export default noteSchema;