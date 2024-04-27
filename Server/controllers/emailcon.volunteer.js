// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");
require("dotenv").config();

//2. Configure email and send it.
async function sendMail2({name,email}){
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: process.env.e_id,
            pass: process.env.e_pass,
        },
    });

    let mailOptions = {
        from: 'Gaurav@goodwill.com',
            to: email,
            subject: `Thanks for applying ${name}`,
            text: `Dear ${name}, Thanks for showing your interest in join our team, someone from the team will reachout to you shortly`,
    };

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    }catch (err) {
        console.log('Email send failed with error: ' + err);
    }


};

module.exports = sendMail2;