import nodemailer from "nodemailer";
import validate from 'deep-email-validator'

export default (app) => {
    //set up smtp
    var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL_ACCOUNT,
            pass: process.env.EMAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });
    app.post("/contact", async (req, res) => {

        console.log("requesting to send email...", process.env.TO_EMAIL)
        const name = req.body.name
        const email = req.body.email
        const message = req.body.message

        // Check if email is valid
        const { valid, reason, validators } = await validate.validate(email);
        if (valid) {

            // TBH, you could set up a better email message, or store it in a DB
            let html = '<div>' + email + '</div>'
            html += '<div>' + name + '</div>'
            html += '<div>' + message + '</div>'

            let mailOptions = {
                from: process.env.EMAIL_ACCOUNT,
                to: process.env.TO_EMAIL,
                subject: "New Contact!",
                html: html
            }

            smtpTransport.sendMail(mailOptions, async (error, response) => {
                if (error) {
                    res.status(500).send(error)
                }
                else {
                    res.status(200).send(response)
                }
            });
        }
        else {
            res.status(400).send({ message: reason })
        }
    })
}
