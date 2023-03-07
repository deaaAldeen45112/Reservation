using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IHeaderService
    {
        public bool UpdateHeader(Header header);
        public List<Header> GetHeader();
    }
}
