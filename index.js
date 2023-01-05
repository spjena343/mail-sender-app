const { text } = require('body-parser')
const nodemailer = require('nodemailer')

let mailtranspoter = nodemailer.createTransport(
    {
        service: "outlook365",
        auth: {
            user: 'xyz@outlook.com',     //your email id and password
            pass: 'yourpassword'
        }
    }
)
let mailDetails = {
    from: 'xyz@outlook.com',
    to: 'recieversmail@gmail.com',   //reciever's email id
    subject: 'message',
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