const { handleEmail } = require("../helpers/handle_email");

async function  sendMessage(req,res){
    const { email, subject , message } = req.body

    try {
        await handleEmail ( email, subject, message);
        res.status(200).send({ response: "Email sent!"});
    }
    catch(error){
        res.status(500).send(error.message);
    }
}

module.exports = { sendMessage };