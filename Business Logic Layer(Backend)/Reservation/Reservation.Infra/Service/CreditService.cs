using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;
using Reservation.Core.Repository;

namespace Reservation.Infra.Service
{
    public class CreditService : ICreditService
    {
        private readonly ICreditRepositroy _creditRepository;
        public CreditService(ICreditRepositroy creditRepository)
        {
            _creditRepository = creditRepository;
        }

        public bool DeleteCreditByCreditId(decimal creditId)
        {
            return _creditRepository.DeleteCreditByCreditId(creditId);
        }

        public List<Credit> GetAllCredit()
        {
            return _creditRepository.GetAllCredit();
        }

        public List<Credit> GetCreditByCreditNumber(string creditNumber)
        {
            return _creditRepository.GetCreditByCreditNumber(creditNumber);
        }

        public bool InsertCredit(Credit credit)
        {
            return _creditRepository.InsertCredit(credit);
        }

        public bool UpdateCredit(Credit credit)
        {
            return _creditRepository.UpdateCredit(credit);
        }

        public bool UpdeteAmountByCreditNumber(Credit credit)
        {
            return _creditRepository.UpdeteAmountByCreditNumber(credit);
        }
    }
}
