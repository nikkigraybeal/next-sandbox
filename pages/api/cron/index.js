import sendgrid from "@sendgrid/mail";
import welcome from "../../../lib/mailer/templates/welcome"
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {

  const emailInfo = welcome({firstName: "Nikki"})
  
  const options = {
    to: "nikki@codethedream.org",
    from: "nikki@codethedream.org",
    subject: "Email sent",
    text: "You sent and email, wow",
    html: emailInfo.html
  }

  try {
    await sendgrid.send(options);
  } catch (error) {
      console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json("mail sent!");
}
