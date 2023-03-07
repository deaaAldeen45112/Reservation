using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IPaymentMethodService
    {
        public List<PaymentMethod> GetPaymentMethodByPaymentMethodId(decimal paymentMethodId);

        public bool InsertPaymentMethod(PaymentMethod paymentMethod);
        public bool UpdatePaymentMethod(PaymentMethod paymentMethod);
        public bool DeletePaymentMethodByPaymentMethodId(decimal PaymentMethodId);
        public List<PaymentMethod> GetAllPaymentMethod();
    }
}
