using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class PaymentMethodService : IPaymentMethodService
    {
        private readonly IPaymentMethodRepositroy _paymentMethodRepositroy;
        public PaymentMethodService(IPaymentMethodRepositroy paymentMethodRepositroy)
        {
            _paymentMethodRepositroy = paymentMethodRepositroy;
        }

        public bool DeletePaymentMethodByPaymentMethodId(decimal PaymentMethodId)
        {
            return _paymentMethodRepositroy.DeletePaymentMethodByPaymentMethodId(PaymentMethodId);
        }

        public List<PaymentMethod> GetAllPaymentMethod()
        {
            return _paymentMethodRepositroy.GetAllPaymentMethod();
        }

        public List<PaymentMethod> GetPaymentMethodByPaymentMethodId(decimal paymentMethodId)
        {
            
            return _paymentMethodRepositroy.GetPaymentMethodByPaymentMethodId(paymentMethodId);
        }

        public bool InsertPaymentMethod(PaymentMethod paymentMethod)
        {
            return _paymentMethodRepositroy.InsertPaymentMethod(paymentMethod);
        }

        public bool UpdatePaymentMethod(PaymentMethod paymentMethod)
        {
            return _paymentMethodRepositroy.UpdatePaymentMethod(paymentMethod);
        }
    }
}
