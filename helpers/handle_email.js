require('dotenv').config();
const { transporter } = require('../config/config');

const handleEmail = async ( email, subject,  message , file) => {
    try {

        // const fileContent = Buffer.from(file.data)
           
        const mailDetails = {
            from: process.env.EMAIL,
            to:email,
            subject: subject,
            html: `<b>Email: ${email}</b><br> ${message}<p></p>`,
        };
        await transporter.sendMail(mailDetails);
        console.log(mailDetails)
    } catch(error){
        throw new Error (error.message);
    }
};


module.exports = { handleEmail };