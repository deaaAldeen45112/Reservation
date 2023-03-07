
using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IPaymentMethodRepositroy
    {
        public List<PaymentMethod> GetPaymentMethodByPaymentMethodId(decimal paymentMethodId);

        public bool InsertPaymentMethod(PaymentMethod paymentMethod);
        public bool UpdatePaymentMethod(PaymentMethod paymentMethod);
        public bool DeletePaymentMethodByPaymentMethodId(decimal PaymentMethodId);
        public List<PaymentMethod> GetAllPaymentMethod();

    }
}
