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
    public class PaymentMethodRepository : IPaymentMethodRepositroy
    {
        private readonly IDbContext _dbContext;
        public PaymentMethodRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool DeletePaymentMethodByPaymentMethodId(decimal p_PaymentMethodId)
        {
            var p = new DynamicParameters();
            p.Add("PaymentMethodId", p_PaymentMethodId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("PAYMENT_METHOD_PACKAGE.DeletePAYMENT_METHODByPaymentMethodId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<PaymentMethod> GetAllPaymentMethod()
        {
            IEnumerable<PaymentMethod> result = _dbContext.Connection.Query<PaymentMethod>("PAYMENT_METHOD_PACKAGE.GetAllPAYMENT_METHOD", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public List<PaymentMethod> GetPaymentMethodByPaymentMethodId(decimal paymentMethodId)
        {
            var p = new DynamicParameters();
            p.Add("paymentMethodId", paymentMethodId, dbType: DbType.Decimal, direction: ParameterDirection.Input);
            IEnumerable<PaymentMethod> result = _dbContext.Connection.Query<PaymentMethod>("PAYMENT_METHOD_PACKAGE.GetPaymentMethodByPaymentMethodId",p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool InsertPaymentMethod(PaymentMethod paymentMethod)
        {
            var p = new DynamicParameters();
            p.Add("PaymentMethodName", paymentMethod.Payment_Method_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("PAYMENT_METHOD_PACKAGE.InsertPAYMENT_METHOD", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public bool UpdatePaymentMethod(PaymentMethod paymentMethod)
        {
            var p = new DynamicParameters();
            p.Add("PaymentMethodId", paymentMethod.Payment_Method_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("PaymentMethodName", paymentMethod.Payment_Method_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("PAYMENT_METHOD_PACKAGE.UpdatePAYMENT_METHOD", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
