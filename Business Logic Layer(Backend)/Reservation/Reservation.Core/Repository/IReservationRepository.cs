
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;


namespace Reservation.Core.Data
{
    public interface IReservationRepositroy
    {
        public List<ReservationTable> GetReservationBycustomerIdInSysTime(decimal cusId);

        public bool InsertReservation(ReservationTable reservation);
        public bool UpdateReservation(ReservationTable reservation);
        public bool DeleteReservationByReservationId(decimal ReservationId);
        public List<ReservationTable> GetAllReservation();
        public bool UpdateResStatusByResId(decimal ResStatus, decimal ReservationId);
        public List<ReservationTable> FilterReservationBetweenDate(TableDTO tableDTO);
        public List<ReservationTable> FilterReservationFromDate(TableDTO tableDTO);
        public List<ReservationTable> FilterReservationToDate(TableDTO tableDTO);

    }
}
