// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
require("dotenv").config();

//2. Configure email and send it.
async function sendMail({name, email, donation, amount, choice, pickup}){


    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    let mailOptions = {};

    //2. Configure email content
    if(donation == 'money'){
        mailOptions = {
            from: 'Gaurav@goodwill.com',
            to: email,
            subject: `Thanks for your Kindness ${name}`,
            text: `Dear ${name}, Thanks for your generous donation of amount = ${amount}`,
        };
    }
    else if(choice == 'courier'){
        mailOptions = {
            from: 'Gaurav@goodwill.com',
            to: email,
            subject: `Thanks for your Kindness ${name}`,
            text: `Dear ${name}, Thanks for your generous donation of ${donation} please courier them to this address = ConsultIt greater Noida`,
        };
    }
    else if(choice == "pickup"){
        mailOptions = {
            from: 'Gaurav@goodwill.com',
            to: email,
            subject: `Thanks for your Kindness ${name}`,
            text: `Dear ${name}, Thanks for your generous donation of ${donation}, total number = ${pickup} someone from our team contact you shortly`,
        };
    }

    //3. send the email with error handling like if wrong user email, smtp server not working etc
    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (err) {
        console.log('Email send failed with error: ' + err);
    }
};

module.exports = sendMail;

