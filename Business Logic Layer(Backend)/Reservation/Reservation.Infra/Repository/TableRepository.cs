using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class TableRepository : ITableRepository
    {
        private readonly IDbContext _dbContext;

        public TableRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool AddTable(Table table)
        {
            var p = new DynamicParameters();
            p.Add("p_max_person", table.Max_Person, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_image_location", table.Image_Location, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("p_details", table.Details, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("table_package.add_table", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool DeleteTable(int id)
        {
            var p = new DynamicParameters();
            p.Add("p_table_id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("table_Package.delete_table", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateTable(Table table)
        {
            var p = new DynamicParameters();
            p.Add("p_table_id", table.Table_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_max_person", table.Max_Person, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_image_location", table.Image_Location, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("p_details", table.Details, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("table_package.update_table", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<Table> GetAllTables()
        {
            IEnumerable<Table> result = _dbContext.Connection.Query<Table>("Table_Package.get_all_tables", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<Table> FilterByNumberOfChairs(int chairs)
        {
            var p = new DynamicParameters();
            p.Add("p_person", chairs, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Table> result = _dbContext.Connection.Query<Table>("Table_Package.FILTER_BY_CHAIRS", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public Table GetById(int id)
        {
            var p = new DynamicParameters();
            p.Add("p_table_id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Table> result = _dbContext.Connection.Query<Table>("Table_Package.get_by_id", p, commandType: CommandType.StoredProcedure);

            return result.FirstOrDefault();
        }
        public List<Table> getTableByDate(TableDTO tableDTO)
        {
            var p = new DynamicParameters();
            p.Add("from_Date", tableDTO.reservationFrom, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("to_Date", tableDTO.reservationTo, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            IEnumerable<Table> result = _dbContext.Connection.Query<Table>("Table_Package.getTableByDate", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<Table> getTableByDateAndPerson(TableDTO tableDTO)
        {
            var p = new DynamicParameters();
            p.Add("from_Date", tableDTO.reservationFrom, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("to_Date", tableDTO.reservationTo, dbType: DbType.DateTime, direction: ParameterDirection.Input);
            p.Add("MaxPerson", tableDTO.chairs, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Table> result = _dbContext.Connection.Query<Table>("Table_Package.getTableByDateAndMaxPerson", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public int CheckReservationsOnTable(int id)
        {
            var p = new DynamicParameters();
            p.Add("P_id", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Query<int>("Table_Package.CheckReservationsOnTable", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        }
    }
}
