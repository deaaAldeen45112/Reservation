using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IContactUsRepository
    {
        public List<ContactUs> GetAllContactUs();
        public List<ContactUs> GetContactUsBySubject(string subject);
        public bool AddContactUs(ContactUs contactUs);
    }
}
