using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class TableService : ITableService
    {
        private readonly ITableRepository _tableRepository;
        public TableService(ITableRepository tableRepository)
        {
            _tableRepository = tableRepository;
        }
        public bool AddTable(Table table)
        {
            return _tableRepository.AddTable(table);
        }

        public bool DeleteTable(int id)
        {
            return _tableRepository.DeleteTable(id);
        }

        public List<Table> FilterByNumberOfChairs(int chairs)
        {
            return _tableRepository.FilterByNumberOfChairs(chairs);
        }

        public List<Table> GetAllTables()
        {
            return _tableRepository.GetAllTables();
        }

        public bool UpdateTable(Table table)
        {
            return _tableRepository.UpdateTable(table);
        }
        public Table GetById(int id)
        {
            return _tableRepository.GetById(id);
        }
        public List<Table> getTableByDate(TableDTO tableDTO)
        {
            return _tableRepository.getTableByDate(tableDTO);
        }
        public List<Table> getTableByDateAndPerson(TableDTO tableDTO)
        {
            return _tableRepository.getTableByDateAndPerson(tableDTO);
        }
        public int CheckReservationsOnTable(int id)
        {
            return _tableRepository.CheckReservationsOnTable(id);
        }
    }
}
