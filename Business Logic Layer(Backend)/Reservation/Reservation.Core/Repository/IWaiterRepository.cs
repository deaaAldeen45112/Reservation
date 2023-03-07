using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IWaiterRepositroy
    {

        public bool InsertWaiter(Waiter waiter);
        public bool UpdateWaiter(Waiter waiter);
        public bool DeleteWaiterByWaiterId(decimal WaiterId);
        public List<Waiter> GetAllWaiter();
        public List<Waiter> GetAvailableWaiter();

    }
}
