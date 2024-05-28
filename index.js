const http = require("http")
const nodemailer = require("nodemailer")
const fs = require('fs')

const server = http.createServer((req,res)=>{
    const auth = nodemailer.createTransport({
        service:"gmail",
        secure:true,
        port:465,
        auth:{
            user:"ky6091@gmail.com",
            pass:"krgjqptwwngvomva " , //put open password by opening gmail 2 varification
        }
    })

    const receiver = {
        from:"ky6091@gmail.com",//Enter the email from you wanto send the email 
        to:"aky1257@gmail.com",// Enter the email whom to send
        subject:"Node JS Mail testing!!",
        text:"Hello, This is just testing message.",
        attachments:[
            {
                filename:'file.txt',
                content : fs.createReadStream("file.txt")
            }
        ]
    }
    auth.sendMail(receiver,(error,emailResponse)=>{
        if(error)
            throw error ;
        console.log("success!!! ")
        res.end();
    })
})
server.listen(3000,'127.0.0.1') 