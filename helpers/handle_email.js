require('dotenv').config();
const { transporter } = require('../config/config');

const handleEmail = async (subject,  email, message) => {
    try {
        const mailDetails = {
            from: process.env.EMAIL,
            to:process.env.EMAIL,
            subject: subject,
            html: `<b>Email: ${email}</b><br> ${message}`,
        };
        await transporter.sendMail(mailDetails);

    } catch(error){
        throw new Error (error.message);
    }
};

module.exports = { handleEmail };