using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using Reservation.Infra.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class ContactUsInfoService : IContactUsInfoService
    {
        private readonly IContactUsInfoRepository _contactUsRepository;
        public ContactUsInfoService(IContactUsInfoRepository contactUsRepository)
        {
            _contactUsRepository = contactUsRepository;
        }
        public bool UpdateContactUsInfo(ContactUsInfo contactUsInfo)
        {
            return _contactUsRepository.UpdateContactUsInfo(contactUsInfo);
        }
        public List<ContactUsInfo> GetContactUsInfo()
        {
            return _contactUsRepository.GetContactUsInfo();
        }
    }
}
