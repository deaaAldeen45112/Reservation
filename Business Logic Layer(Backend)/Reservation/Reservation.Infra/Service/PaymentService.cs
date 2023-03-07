using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class PaymentService :IPaymentService
  {
        private readonly IPaymentRepositroy _paymentRepositroy;
        public PaymentService(IPaymentRepositroy paymentRepositroy)
        {
            _paymentRepositroy = paymentRepositroy;
        }
        public bool DeletePaymentByPaymentId(decimal PaymentId)
        {
            return _paymentRepositroy.DeletePaymentByPaymentId(PaymentId);
        }

        public List<Payment> GetAllPayment()
        {
            return _paymentRepositroy.GetAllPayment();
        }

        public bool InsertPayment(Payment payment)
        {
            return _paymentRepositroy.InsertPayment(payment);
        }
        public List<Payment> GetPaymentByPaymentId(decimal paymentId)
        {
            return _paymentRepositroy.GetPaymentByPaymentId(paymentId);
        }
        public bool UpdatePayment(Payment payment)
        {
            return _paymentRepositroy.UpdatePayment(payment);
        }

    public List<PaymentDto> CountingPaymentGroupByDate(DateTime from_Date, DateTime to_Date)
    {
      return _paymentRepositroy.CountingPaymentGroupByDate(from_Date, to_Date);
    }

    public List<PaymentDto> CountingPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id)

    {

      return _paymentRepositroy.CountingPaymentByCustomerIdGroupByDate(from_Date,to_Date,id);
    }
    

    public List<PaymentDto> SumPaymentGroupByDate(DateTime from_Date, DateTime to_Date)
    {
      return _paymentRepositroy.SumPaymentGroupByDate(from_Date, to_Date);
    }

    public List<PaymentDto> SumPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _paymentRepositroy.SumPaymentByCustomerIdGroupByDate(from_Date, to_Date,id);
    }

    public List<PaymentDto> StatisticPaymentByDate(DateTime from_Date, DateTime to_Date)
    {
      return _paymentRepositroy.StatisticPaymentByDate(from_Date, to_Date);
    }

    public List<PaymentDto> StatisticPaymentByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id)
    {
      return _paymentRepositroy.StatisticPaymentByDateAndByCustomerId(from_Date, to_Date, id);
    }

    public List<PaymentDto> StatisticPaymentByDateAndGroupByPaymentMethodId(DateTime from_Date, DateTime to_Date)
    {
      return _paymentRepositroy.StatisticPaymentByDateAndGroupByPaymentMethodId(from_Date,to_Date);
    }
  }
}
