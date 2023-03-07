using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface ITableRepository
    {
        public bool AddTable(Table table);
        public bool DeleteTable(int id);
        public bool UpdateTable(Table table);
        public List<Table> GetAllTables();
        public List<Table> FilterByNumberOfChairs(int chairs);
        public Table GetById(int id);
        public List<Table> getTableByDate(TableDTO tableDTO);
        public List<Table> getTableByDateAndPerson(TableDTO tableDTO);
        public int CheckReservationsOnTable(int id);
    }
}
