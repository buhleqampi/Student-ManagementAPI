const { handleEmail } = require("../helpers/handle_email");

async function  sendMessage(req,res){
    const { email, subject , message, file } = req.body
    console.log(req.files.file )
    const fileUpload = req.files.file || req.files

    try {
        await handleEmail ( email, subject, message , fileUpload);
        res.status(200).send({ response: "Email sent!"});
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = { sendMessage };

