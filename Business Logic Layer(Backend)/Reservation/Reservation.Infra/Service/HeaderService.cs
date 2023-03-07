using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class HeaderService:IHeaderService
    {
        private readonly IHeaderRepository _headerRepository;
        public HeaderService(IHeaderRepository headerRepository)
        {
            _headerRepository = headerRepository;
        }
        public bool UpdateHeader(Header header)
        {
            return _headerRepository.UpdateHeader(header);
        }
        public List<Header> GetHeader()
        {
            return _headerRepository.GetHeader();
        }
    }
}
