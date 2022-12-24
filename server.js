const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails.
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "********@gmail.com",
        pass: "****************",
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name  =   req.body.firstName + " " + req.body.lastName;
    const email =   req.body.email;
    const phone =   req.body.phone;
    const message = req.body.message;

    const mail = {
        from: email,
        to: "aldo.fwi@gmail.com",
        subject: "Contact from Submit - AD Portfolio",
        html:  `<p>Name: <strong>${name}</strong>,</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>`,
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
            console.log("Name = " + error.name + "\nError = " + error.message)
        } else {
            res.json({ code: 200, status: "Message Sent!" });
        }
    });
});
