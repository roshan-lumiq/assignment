const { body } = require('express-validator');
const userTable = require('../model/User')
const validate = require('../middleware/validator');

const insertData = [body('name').not().notEmpty().withMessage('name is required'), body('email')
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Invalid email address')
    , body('contactNumber').notEmpty().withMessage('contact is required').isLength(10).withMessage('Invalid contact number'),
body('age')
    .notEmpty().withMessage('Age is required')
    .isInt().withMessage('Age must be a whole number')
    .custom((value) => {
        if (parseInt(value) <= 18) {
            throw new Error('Age must be greater than 18');
        }
        return true;
    }),

body('dob')
    .notEmpty().withMessage('Date of birth is required')
    .matches(/^\d{2}-\d{2}-\d{4}$/).withMessage('Invalid date of birth format (dd-yy-mm)'),


    validate,




async (req, res, next) => {

    try {
        const user = await userTable.create({ ...req.body });
        return res.status(200).json({
            'message': 'insersion working fine',
            statusCode: 200,
            error: false,
            data: user
        })

    } catch (er) {
        console.error('error occured while adding data', er);
        return res.status(500).json({
            "message": "internal server error!",
            error: true,
            data: er,
            statusCode: 500
        })
    }


}]

const getUserList = async (req, res) => {

    let user = await userTable.findAll()

    return res.json(user)

}


module.exports = { insertData, getUserList };