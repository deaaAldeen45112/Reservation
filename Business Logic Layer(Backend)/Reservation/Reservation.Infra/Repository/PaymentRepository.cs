using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;

using Reservation.Core.Repository;
using Reservation.Core.DTO;

namespace Reservation.Infra.Repository
{
    public class PaymentRepository : IPaymentRepositroy
    {
        private readonly IDbContext _dbContext;
        public PaymentRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    public List<PaymentDto> CountingPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id)
    {
      
        var p = new DynamicParameters();
        p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
        p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);

      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.CountingPaymentByCustomerIdGroupByDate", p, commandType: CommandType.StoredProcedure);
        return basicorders.AsList();


    }

    public List<PaymentDto> CountingPaymentGroupByDate(DateTime from_Date, DateTime to_Date)
    {
      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
    
      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.CountingPaymentGroupByDate", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();

    }

    public bool DeletePaymentByPaymentId(decimal p_PaymentId)
        {
            var p = new DynamicParameters();
            p.Add("PaymentId", p_PaymentId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("PAYMENT_PACKAGE.DeletePAYMENTByPaymentId", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Payment> GetAllPayment()
        {
            IEnumerable<Payment> result = _dbContext.Connection.Query<Payment>("PAYMENT_PACKAGE.GetAllPAYMENT", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public List<Payment> GetPaymentByPaymentId(decimal paymentId)
        {
            var p = new DynamicParameters();
            p.Add("paymentId", paymentId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Payment> result = _dbContext.Connection.Query<Payment>("PAYMENT_PACKAGE.GetPaymentByPaymentId", p,commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool InsertPayment(Payment payment)
        {

           

            var p = new DynamicParameters();
            p.Add("PaymentMethodId", payment.Payment_Method_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("OrderId", payment.Order_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("PaymentPrice", payment.Payment_Price, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("PaymentDate", payment.Payment_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("PaymentCurrncy", payment.Payment_Currncy, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CreditId", payment.Credit_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("PAYMENT_PACKAGE.InsertPAYMENT", p, commandType: CommandType.StoredProcedure);
            return true;
        }

    public List<PaymentDto> StatisticPaymentByDate(DateTime from_Date, DateTime to_Date)
    {

      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
     
      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.StatisticPaymentByDate", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();

    }

    public List<PaymentDto> StatisticPaymentByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {

      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);

      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.StatisticPaymentByDateAndByCustomerId", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();

    }

    public List<PaymentDto> StatisticPaymentByDateAndGroupByPaymentMethodId(DateTime from_Date, DateTime to_Date)
    {

      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
     
      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.StatisticPaymentByDateAndGroupByPaymentMethodId", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();

    }

    public List<PaymentDto> SumPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id)
    {

      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("id", id, dbType: DbType.Decimal, direction: ParameterDirection.Input);

      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.SumPaymentByCustomerIdGroupByDate", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();

    }

    public List<PaymentDto> SumPaymentGroupByDate(DateTime from_Date, DateTime to_Date)
    {

      var p = new DynamicParameters();
      p.Add("from_Date", from_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
      p.Add("to_Date", to_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
     
      IEnumerable<PaymentDto> basicorders = _dbContext.Connection.Query<PaymentDto>("payment_package.SumPaymentGroupByDate", p, commandType: CommandType.StoredProcedure);
      return basicorders.AsList();

    }

    public bool UpdatePayment(Payment payment)
        {
            Debug.WriteLine(payment.Payment_Id + "jjjj");
            var p = new DynamicParameters();
            p.Add("PaymentId", payment.Payment_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("PaymentMethodId", payment.Payment_Method_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("OrderId", payment.Order_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("PaymentPrice", payment.Payment_Price, dbType: DbType.Double, direction: ParameterDirection.Input);
            p.Add("PaymentDate", payment.Payment_Date, dbType: DbType.Date, direction: ParameterDirection.Input);
            p.Add("PaymentCurrncy", payment.Payment_Currncy, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("CreditId", payment.Credit_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("PAYMENT_PACKAGE.updatepayment", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
