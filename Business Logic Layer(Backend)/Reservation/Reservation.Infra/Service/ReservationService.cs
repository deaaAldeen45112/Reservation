using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class ReservationService : IReservationService
    {
        private readonly IReservationRepositroy  _reservationRepositroy;
        public ReservationService(IReservationRepositroy reservationRepositroy)
        {
            _reservationRepositroy = reservationRepositroy;
        }
        public bool DeleteReservationByReservationId(decimal ReservationId)
        {
            return _reservationRepositroy.DeleteReservationByReservationId(ReservationId);
        }

        public List<ReservationTable> GetAllReservation()
        {
            return _reservationRepositroy.GetAllReservation();
        }

        public bool InsertReservation(ReservationTable reservation)
        {
            return _reservationRepositroy.InsertReservation(reservation);
        }

        public bool UpdateReservation(ReservationTable reservation)
        {
            return _reservationRepositroy.UpdateReservation(reservation);
        }

        public bool UpdateResStatusByResId(decimal ResStatus, decimal ReservationId)
        {
            return _reservationRepositroy.UpdateResStatusByResId(ResStatus, ReservationId);
        }
        public List<ReservationTable> FilterReservationBetweenDate(TableDTO tableDTO)
        {
            return _reservationRepositroy.FilterReservationBetweenDate(tableDTO);
        }
        public List<ReservationTable> FilterReservationFromDate(TableDTO tableDTO)
        {
            return _reservationRepositroy.FilterReservationFromDate(tableDTO);
        }
        public List<ReservationTable> FilterReservationToDate(TableDTO tableDTO)
        {
            return _reservationRepositroy.FilterReservationToDate(tableDTO);
        }

    public List<ReservationTable> GetReservationBycustomerIdInSysTime(decimal cusId)
    {
      return _reservationRepositroy.GetReservationBycustomerIdInSysTime(cusId);
    }
  }
}
