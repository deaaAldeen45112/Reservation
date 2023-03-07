using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IHeaderRepository
    {
        public bool UpdateHeader(Header header);
        public List<Header> GetHeader();
    }
}
