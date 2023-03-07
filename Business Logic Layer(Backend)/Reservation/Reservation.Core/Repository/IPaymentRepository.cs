using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IPaymentRepositroy
    {


    List<PaymentDto> CountingPaymentGroupByDate(DateTime from_Date, DateTime to_Date );
    List<PaymentDto> CountingPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id);
    List<PaymentDto> SumPaymentGroupByDate(DateTime from_Date, DateTime to_Date );
    List<PaymentDto> SumPaymentByCustomerIdGroupByDate(DateTime from_Date, DateTime to_Date, decimal id);
    List<PaymentDto> StatisticPaymentByDate(DateTime from_Date, DateTime to_Date );
    List<PaymentDto> StatisticPaymentByDateAndByCustomerId(DateTime from_Date, DateTime to_Date, decimal id);
    List<PaymentDto> StatisticPaymentByDateAndGroupByPaymentMethodId(DateTime from_Date, DateTime to_Date );
    public List<Payment> GetPaymentByPaymentId(decimal paymentId);
        public bool InsertPayment(Payment payment);
        public bool UpdatePayment(Payment payment);
        public bool DeletePaymentByPaymentId(decimal PaymentId);
        public List<Payment> GetAllPayment();

    }
}
