// NOTES:
// follow the structure of this file to create a custom email template

// styling html email is painful!
// tips: put it in a table and make the width attribute = 100%
// nest your tags in a <tr> and <td> tag.
// centering, color and background have to be done at the <tr> level
// img tags must have alt, plus height and width styling

// CTD Labs logo image is currently being hosted by Nikki's Dropbox. 
// prob should be changed

export default function emailTemplate (user) {
  const emailBody = `
    <html>
    <header><title</title></header>
      <body>
        <table width="98%" 
               border="0" 
               cellspacing="0" 
               cellpadding="0" 
               style="border-collapse: collapse;"
               
        >
          <table with="100%"
                 border="0" 
                 cellspacing="0" 
                 cellpadding="5" 
                 style="border-collapse: collapse;"
                 align="center"
          >
            <tr style="">
            <td style="margin-top: 20px;"
                align="center"
            >
              <img src="https://dl.dropboxusercontent.com/s/b45hwsgslwxulio/labs-g-01.  png?    dl=0" 
                   alt="CTD logo" 
                   style="height: 150px; width: 150px" 
                   height: "150px"
                   width: "150px"
              /></td>
          </table>
      
          <table with="100%"
                 border="0" 
                 cellspacing="0" 
                 cellpadding="0" 
                 align="center"
          >
            <tr style="width: 100%;">
              <td style="border-top: 2px solid black;width: 100%;"  align="center">
      
              <--!  add your content here  !-->
      
              </td>
            </tr>  
          </table>
        </table>
        
      </body>
    </html>
  `
  return {
    recipient: user.personalEmail, // or user.ctdEmail,
    sender: process.env.SENDGRID_SENDER, // this is default. add another env variable if you want to send from a different address. 
    subject: "<email subject>",
    text: "<text version of email>",
    html: emailBody
  };
}