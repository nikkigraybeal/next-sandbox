import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  const body = req.body;
  console.log("BODY", body)

  const options = {
    to: body.to,
    from: body.from,
    subject: body.subject,
    text: body.text,
    html: body.html
  }

  try {
    await sendgrid.send(options);
  } catch (error) {
      console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
