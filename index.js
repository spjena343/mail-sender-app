const { text } = require('body-parser')
const nodemailer = require('nodemailer')

let mailtranspoter = nodemailer.createTransport(
    {
        service: "outlook365",
        auth: {
            user: 'test-node34@outlook.com',
            pass: 'qwefghnm,'
        }
    }
)
let mailDetails = {
    from: 'test-node34@outlook.com',
    to: 'spjena343@gmail.com',
    subject: 'how to make a full page',
    text: 'hey how are you'

}
mailtranspoter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log(err);

    }
    else {
        console.log('sent mail successfully'+info.response);
    }

})