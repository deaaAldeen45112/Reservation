using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IIndexRepository
    {
        public bool UpdateIndex(IndexTable indexTable);
        public List<IndexTable> GetIndexTable();
    }
}
