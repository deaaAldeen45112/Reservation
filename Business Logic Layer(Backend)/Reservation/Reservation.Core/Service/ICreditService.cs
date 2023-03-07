using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface ICreditService
    {
        public bool InsertCredit(Credit credit);
        public bool UpdateCredit(Credit credit);
        public bool DeleteCreditByCreditId(decimal creditId);
        public List<Credit> GetAllCredit();
        public bool UpdeteAmountByCreditNumber(Credit credit);
        public List<Credit> GetCreditByCreditNumber(string creditNumber);
    }
}
