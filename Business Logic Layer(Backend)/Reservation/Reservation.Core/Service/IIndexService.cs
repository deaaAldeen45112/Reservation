using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IIndexService
    {
        public bool UpdateIndex(IndexTable indexTable);
        public List<IndexTable> GetIndexTable();
    }
}
