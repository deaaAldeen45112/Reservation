using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IAboutUsRepository
    {
        public bool UpdateAboutUs(AboutUs aboutUs);
        public List<AboutUs> GetAboutUs();
    }
}
