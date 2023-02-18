
import Joi from 'joi';

export const validationMiddleware = (schema, property) => {
    return (req ,res, next) => {
        console.log(req[property]);
        Joi.validate(req[property], schema).then((results) => {
            next();
        }).catch((err) => {
            const {details} = err;
            res.status(400).json({errors: [{message: details[0].message, code: 30}]})
        });
    }
};