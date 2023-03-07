using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public  interface IAboutUsService
    {
        public bool UpdateAboutUs(AboutUs aboutUs);
        public List<AboutUs> GetAboutUs();
    }
}
