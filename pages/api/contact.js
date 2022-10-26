import nodemailer from "nodemailer";

const handler = async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "anahi.altenwerth99@ethereal.email",
      pass: "BHcTAcJ4Mzwppxg34S",
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "reciever@gmail.com",
      subject: `Contact form submission from ${name}`,
      html: `<p>New contact form submission from ${name}</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>`,
    });

    console.log("message sent", emailRes.messageId);
  } catch (err) {
    console.log("err", err);
  }

  res.status(200).json(req.body);
};

export default handler;
