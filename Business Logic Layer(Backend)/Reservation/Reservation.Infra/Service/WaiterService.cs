using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class WaiterService: IWaiterService
    {
        private readonly IWaiterRepositroy _waiterRepositroy;
        public WaiterService(IWaiterRepositroy waiterRepositroy)
        {
            _waiterRepositroy = waiterRepositroy;
        }

        public bool DeleteWaiterByWaiterId(decimal WaiterId)
        {
            return _waiterRepositroy.DeleteWaiterByWaiterId(WaiterId);
        }

        public List<Waiter> GetAllWaiter()
        {
            return _waiterRepositroy.GetAllWaiter();
        }

        public List<Waiter> GetAvailableWaiter()
        {
            return _waiterRepositroy.GetAvailableWaiter();
        }

        public bool InsertWaiter(Waiter waiter)
        {
            return _waiterRepositroy.InsertWaiter(waiter);
        }

        public bool UpdateWaiter(Waiter waiter)
        {
            return _waiterRepositroy.UpdateWaiter(waiter);
        }
    }
}
