using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IContactUsInfoService
    {
        public bool UpdateContactUsInfo(ContactUsInfo contactUsInfo);

    public List<ContactUsInfo> GetContactUsInfo();
  }
}
