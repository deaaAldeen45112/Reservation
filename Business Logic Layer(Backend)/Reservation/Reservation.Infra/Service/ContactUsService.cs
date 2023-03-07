using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class ContactUsService : IContactUsService
    {
        private readonly IContactUsRepository _contactUsRepository;

        public ContactUsService(IContactUsRepository contactUsRepository)
        {
            _contactUsRepository = contactUsRepository;
        }
        public bool AddContactUs(ContactUs contactUs)
        {
            return _contactUsRepository.AddContactUs(contactUs);
        }

        public List<ContactUs> GetAllContactUs()
        {
            return _contactUsRepository.GetAllContactUs();
        }

        public List<ContactUs> GetContactUsBySubject(string subject)
        {
            return _contactUsRepository.GetContactUsBySubject(subject);
        }
    }
}
