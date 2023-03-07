using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IContactUsInfoRepository
    {
        public bool UpdateContactUsInfo(ContactUsInfo contactUsInfo);
        public List<ContactUsInfo> GetContactUsInfo();
    }
}
