using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Linq;
namespace Reservation.Infra.Repository
{
    public class ReservationRepository : IReservationRepositroy
    {
        private readonly IDbContext _dbContext;
        public ReservationRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeleteReservationByReservationId(decimal p_ReservationId)
        {
            var p = new DynamicParameters();
            p.Add("ReservationId", p_ReservationId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("RESERVATION_PACKAGE.DeleteRESERVATIONByReservationId", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateReservation(ReservationTable reservation)
        {
            var p = new DynamicParameters();
            p.Add("ReservationId", reservation.Reservation_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("CustomerId", reservation.Customer_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("TableId", reservation.Table_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ReservationFrom", reservation.Reservation_From, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("ReservationTo", reservation.Reservation_To, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("ResStatus", reservation.Res_Status, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("RESERVATION_PACKAGE.UpdateReservation", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool InsertReservation(ReservationTable reservation)
        {
            var p = new DynamicParameters();
            p.Add("CustomerId", reservation.Customer_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("TableId", reservation.Table_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ReservationFrom", reservation.Reservation_From, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("ReservationTo", reservation.Reservation_To, dbType: DbType.Date, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("RESERVATION_PACKAGE.InsertRESERVATION", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<ReservationTable> GetAllReservation()
        {
            IEnumerable<ReservationTable> result = _dbContext.Connection.Query<ReservationTable>("RESERVATION_PACKAGE.GetAllRESERVATION", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public bool UpdateResStatusByResId(decimal p_ResStatus, decimal p_ReservationId)
        {
            var p = new DynamicParameters();
            p.Add("ResStatus", p_ResStatus, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("ReservationId", p_ReservationId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("RESERVATION_PACKAGE.UpdateResStatusByResId", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<ReservationTable> FilterReservationBetweenDate(TableDTO tableDTO)
        {
            var p = new DynamicParameters();
            p.Add("P_ReservationFrom", tableDTO.reservationFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("P_ReservationTo", tableDTO.reservationTo, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<ReservationTable> result = _dbContext.Connection.Query<ReservationTable>("RESERVATION_PACKAGE.FilterReservationBetweenDate",p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<ReservationTable> FilterReservationFromDate(TableDTO tableDTO)
        {
            var p = new DynamicParameters();
            p.Add("P_ReservationFrom", tableDTO.reservationFrom, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<ReservationTable> result = _dbContext.Connection.Query<ReservationTable>("RESERVATION_PACKAGE.FilterReservationFromDate", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<ReservationTable> FilterReservationToDate(TableDTO tableDTO)
        {
            var p = new DynamicParameters();
            p.Add("P_ReservationTo", tableDTO.reservationTo, dbType: DbType.Date, direction: ParameterDirection.Input);
            IEnumerable<ReservationTable> result = _dbContext.Connection.Query<ReservationTable>("RESERVATION_PACKAGE.FilterReservationToDate", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

    public List<ReservationTable> GetReservationBycustomerIdInSysTime(decimal cusId)
    {
      var p = new DynamicParameters();
      p.Add("cusId", cusId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
      IEnumerable<ReservationTable> result = _dbContext.Connection.Query<ReservationTable>("RESERVATION_PACKAGE.GetReservationBycustomerIdInSysTime", p, commandType: CommandType.StoredProcedure);
      return result.AsList();
    }
  }
}
