using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class AboutUsService :IAboutUsService
    {
        private readonly IAboutUsRepository _aboutUsRepository;
        public AboutUsService(IAboutUsRepository aboutUsRepository)
        {
            _aboutUsRepository = aboutUsRepository;
        }

        public bool UpdateAboutUs(AboutUs aboutUs)
        {
            return _aboutUsRepository.UpdateAboutUs(aboutUs);
        }
        public List<AboutUs> GetAboutUs()
        {
            return _aboutUsRepository.GetAboutUs();
        }
    }
}
