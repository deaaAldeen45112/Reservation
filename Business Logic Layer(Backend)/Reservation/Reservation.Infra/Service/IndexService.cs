using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class IndexService :IIndexService
    {
        private readonly IIndexRepository _indexRepository;
        public IndexService(IIndexRepository indexRepository)
        {
            _indexRepository = indexRepository;
        }


        public List<IndexTable> GetIndexTable()
        {
            return _indexRepository.GetIndexTable();
        }

        public bool UpdateIndex(IndexTable indexTable)
        {
            return _indexRepository.UpdateIndex(indexTable);
        }
    }
}
