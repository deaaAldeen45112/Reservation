using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IContactUsService
    {
        public List<ContactUs> GetAllContactUs();
        public List<ContactUs> GetContactUsBySubject(string subject);
        public bool AddContactUs(ContactUs contactUs);
    }
}
