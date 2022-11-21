const nodemailer=require('nodemailer');

async function sendmail(toAddress, mailsubject, message){
    //step1. Create test account for sending email. only for testing
    let testAccount = await nodemailer.createTestAccount();

    //step2. configure transporter  object

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    })
    //step3. configure email message
    let email={
        from : '"Ajay Sagar" Ajay@gmail.com',
        to : toAddress,
        subject : mailsubject,
        html:message
    }

    let msg=await transporter.sendMail(email);
    console.log(`Message sent :${msg.messageId}`);
    console.log(`preview Url : ${nodemailer.getTestMessageUrl(msg)}`);

}

sendmail('"Sagar kumar" sagar@hotmail.com',"Remainder of Completion the task","Hi,\nPlease coomplete the task before the moorning");