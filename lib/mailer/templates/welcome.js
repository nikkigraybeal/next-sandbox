export default function welcome(user) {
  const emailBody =  `
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
          <img src="https://dl.dropboxusercontent.com/s/b45hwsgslwxulio/labs-g-01.png?dl=0" 
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
          <td style="border-top: 2px solid black; width: 100%;"  align="center">
            <h1 style="font-size: 50px; padding-top: 50px;">You sent an email, ${user.firstName}!</h1>
            <h2 style="font-size: 30px; padding: 30px;">WOWOWOW</h2>
          </td>
        </tr>  
      </table>
    </table>
      
    </body>
    </html>
  `;
  return {
    recipient: "nikki@codethedream.org",
    sender: "nikki@codethedream.org",
    subject: "Email sent",
    text: `you sent an email`,
    html: emailBody
  };
}
