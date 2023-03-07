using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IFooterRepository
    {
        public bool UpdateFooter(Footer footer);
        public List<Footer> GetFooter();
        public List<FooterDTO> GetFooterHeader();
    }
}
