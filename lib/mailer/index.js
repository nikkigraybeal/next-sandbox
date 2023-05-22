// NOTES:
//all email should be sent through a backend api route

// if using sendGrid dynamic email templates:
// send mail with templateMailer
// pass an object containing dynamic key/val pairs from the template
// as dynamicTemplateData arg

// if using our own custom email templates:
// send mail with htmlMailer
// pass a user and custom template that returns an object (see templates/basicTemplate)

const senderEmail = process.env.SENDGRID_SENDER

async function templateMailer(to, templateId, dynamicTemplateData, from=senderEmail) {
  const baseUrl = process.env.NEXTAUTH_URL;

  try {
    await fetch(
      global.origin ? `/api/sendEmail` : `${baseUrl}/api/sendEmail`,
      {
        body: JSON.stringify({
          to,
          from,
          templateId,
          dynamicTemplateData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
  }
 catch (err) {
   if (err) {
     console.log(err);
     console.log("message failed to send.");
     return;
   }
 } 
  console.log("message sent!");
}

async function htmlMailer(user, customTemplate) {
  const emailInfo = customTemplate(user)
  try {
    await fetch(
      `/api/sendEmail`,
      {
        body: JSON.stringify({
          to: emailInfo.recipient,
          from: emailInfo.sender,
          subject: emailInfo.subject,
          text: emailInfo.text,
          html: emailInfo.html,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
  }
  catch (err) {
    if (err) {
      console.log(err);
      console.log("message failed to send.");
      return;
    }
  }
  console.log("message sent!");
}

export { templateMailer, htmlMailer };
