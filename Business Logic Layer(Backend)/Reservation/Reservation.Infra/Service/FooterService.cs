using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class FooterService : IFooterService
    {
        private readonly IFooterRepository _footerRepository;
        public FooterService(IFooterRepository footerRepository)
        {
            _footerRepository = footerRepository;
        }
        public bool UpdateFooter(Footer footer)
        {
            return _footerRepository.UpdateFooter(footer);
        }
        public List<Footer> GetFooter()
        {
            return _footerRepository.GetFooter();
        }
        public List<FooterDTO> GetFooterHeader()
        {
            return _footerRepository.GetFooterHeader();
        }
    }
}
