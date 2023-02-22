const nodemailer = require("nodemailer");

const Log = require("../models/LogModel")
const Email = require("../models/EmailModel")
const EmailTypes = require("../models/EmailTypesModel")

exports.DailyReport = () => {
    let curDate = new Date(Date.now())
    let hour = curDate.getHours()
    let minute = curDate.getMinutes()
    let second = curDate.getSeconds()

    let curTime = (second + minute*60 + hour*3600)*1000
    let finalTime = (59 + 59*60 + 23*3600)*1000
    let subTime = finalTime - curTime

    const timer = setTimeout(() => {
        fistTimeout()
    }, subTime)
    return () => clearTimeout(timer)
};

function fistTimeout() {
    getTotalUser()

    let fullTime = (59 + 59*60 + 23*3600)*1000
    setInterval(getTotalUser, fullTime)
}

async function getTotalUser() {
    let curDate = new Date(Date.now())
    let day = curDate.getDate();
    let month = curDate.getMonth() + 1;
    let year = curDate.getFullYear();
    let startDate = Date.UTC(year, month-1, day-2, 0, 0, 0)
    let endDate = Date.UTC(year, month-1, day-2, 23, 59, 59)

    var aggregate = await Log.aggregate([
        {
        $match : {
            createdAt: { $gte: new Date(startDate), $lt: new Date(endDate) }
        }
        },
        {
        $group : { _id : "$ip" }
        }
    ])
    console.log('count: ' + aggregate.length)

    let emails = await EmailTypes.findOne({ type: 1 });
    let emailContent = aggregate.length + " user"

    if(emails) {
        let insertEmail = { emailType: 1, emailAddress: emails.emails, 
                emailContent: emailContent, sendDate: new Date(endDate) }
        
        let searchEmail = await Email.findOne({ sendDate: new Date(endDate) })
        if(searchEmail) {
            console.log(searchEmail)
            return;
        }

        let insertResult = await Email.insertMany( insertEmail );
        if(insertResult)
            console.log("Email Insert Success")
        else
            console.log("Email Insert Failed")
    }

    for(let i=0; i<emails.emails.length; i++)
    {
        let sendEmail = emails.emails[i]
        
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "kirylkrauchuk@gmail.com",
                pass: "Alezif61",
            },
        });

        var mailOptions = {
            from: "kirylkrauchuk@gmail.com",
            to: sendEmail,
            subject: "Sending Email using Node.js",
            text: `Welcome to Block Explorer`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        console.log("Confirmation Email has been sent")
    }
}