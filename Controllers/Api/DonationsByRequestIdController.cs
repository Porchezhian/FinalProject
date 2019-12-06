using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;
using Backend.Models;
using System.Net.Mail;
using System.Text;

namespace Backend.Controllers.Api
{
    public class DonationsByRequestIdController : ApiController
    {
        private ModelDBContext context;

        public DonationsByRequestIdController()
        {
            context = new ModelDBContext();
        }
        [HttpPost]
        
        public bool SendEmails(Event eve)
        {
            List<string> emails;
            emails = context.Donations.Where(x => x.Request_Id == eve.Request_Id).Select(x => x.user.Email_id).ToList();

            bool Result = sendmail(emails, eve.Request_Title, "<p>"+"Hi,"+" Event Date is "+eve.EventDate.ToString()+"</p>");
            return Result;
        }

        public bool sendmail(List<string> ToEmail, string subject, string mailbody)
        {
            string senderEmail = System.Configuration.ConfigurationManager.AppSettings["SenderEmail"].ToString();

            string senderPassword = System.Configuration.ConfigurationManager.AppSettings["SenderPassword"].ToString();

            SmtpClient client = new SmtpClient("smtp.gmail.com", 587);

            client.EnableSsl = true;
            client.Timeout = 100000;
            client.DeliveryMethod = SmtpDeliveryMethod.Network;
            client.UseDefaultCredentials = false;
            client.Credentials = new NetworkCredential(senderEmail, senderPassword);

            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(senderEmail);
            foreach (var item in ToEmail)
            {
                mail.To.Add(item);
            }
            mail.Subject = subject;
            mail.Body = mailbody;
            mail.IsBodyHtml = true;
            mail.BodyEncoding = UTF8Encoding.UTF8;
            client.Send(mail);


            return true;

        }
    }
}
