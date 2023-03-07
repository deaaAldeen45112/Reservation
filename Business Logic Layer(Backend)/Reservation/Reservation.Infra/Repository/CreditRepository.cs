using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

using Reservation.Core.Repository;


namespace Reservation.Infra.Repository
{
    public class CreditRepository : ICreditRepositroy
    {
        private readonly IDbContext _dbContext;
        public CreditRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool DeleteCreditByCreditId(decimal creditId)
        {
            var p = new DynamicParameters();
            p.Add("CreditId", creditId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("CREDIT_PACKAGE.DeleteCREDITByCreditId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Credit> GetAllCredit()
        {
            IEnumerable<Credit> credits = _dbContext.Connection.Query<Credit>("CREDIT_PACKAGE.GetAllCREDIT", commandType: CommandType.StoredProcedure);
            return credits.AsList();
        }

        public List<Credit> GetCreditByCreditNumber(string creditNumber)
        {
            var p = new DynamicParameters();
            p.Add("CreditNumber", creditNumber, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<Credit> credits = _dbContext.Connection.Query<Credit>("CREDIT_PACKAGE.GetCreditByCreditNumber", p,commandType: CommandType.StoredProcedure);
            return credits.AsList();
        }

        public bool InsertCredit(Credit credit)
        {
            var p = new DynamicParameters();
            p.Add("CreditNumber", credit.Credit_Number, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CreditAmount", credit.Credit_Amount, dbType: DbType.Double, direction: ParameterDirection.Input);
            var result=_dbContext.Connection.Execute("CREDIT_PACKAGE.InsertCREDIT", p,commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdateCredit(Credit credit)
        {
            var p = new DynamicParameters();
            p.Add("CreditId", credit.Credit_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("CreditNumber", credit.Credit_Number, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CreditAmount", credit.Credit_Amount, dbType: DbType.Double, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("CREDIT_PACKAGE.UpdateCREDIT",p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdeteAmountByCreditNumber(Credit credit)
        {
            var p = new DynamicParameters();
            p.Add("CreditNumber", credit.Credit_Number, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CreditAmount", credit.Credit_Amount, dbType: DbType.Double, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("CREDIT_PACKAGE.UpdeteAmountByCreditNumber",p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
