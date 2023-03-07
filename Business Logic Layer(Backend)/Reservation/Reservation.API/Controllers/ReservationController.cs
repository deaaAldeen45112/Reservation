using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : Controller
    {
        private readonly IReservationService _reservationService; 
        public ReservationController(IReservationService reservationService)
        {
            _reservationService = reservationService;
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool InsertReservation([FromBody]ReservationTable reservation)
        {
            return _reservationService.InsertReservation(reservation);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateReservation([FromBody]ReservationTable reservation)
        {
            return _reservationService.UpdateReservation(reservation);
        }
        [HttpDelete]
        [Route("{action}/{ReservationId}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteReservationByReservationId(decimal ReservationId)
        {
            return _reservationService.DeleteReservationByReservationId(ReservationId);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<ReservationTable>),statusCode: StatusCodes.Status200OK)]
        public List<ReservationTable> GetAllReservation()
        {
            return _reservationService.GetAllReservation();
        }
        [HttpPut]
        [Route("{action}/{ResStatus}/{ReservationId}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateResStatusByResId(decimal ResStatus, decimal ReservationId)
        {
            return _reservationService.UpdateResStatusByResId(ResStatus, ReservationId);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<ReservationTable>), statusCode: StatusCodes.Status200OK)]
        public List<ReservationTable> FilterReservationBetweenDate([FromBody]TableDTO tableDTO)
        {
            return _reservationService.FilterReservationBetweenDate(tableDTO);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<ReservationTable>), statusCode: StatusCodes.Status200OK)]
        public List<ReservationTable> FilterReservationFromDate([FromBody]TableDTO tableDTO)
        {
            return _reservationService.FilterReservationFromDate(tableDTO);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<ReservationTable>), statusCode: StatusCodes.Status200OK)]
        public List<ReservationTable> FilterReservationToDate([FromBody]TableDTO tableDTO)
        {
            return _reservationService.FilterReservationToDate(tableDTO);
        }
    [HttpGet]
    [Route("{action}")]

    public List<ReservationTable> GetReservationBycustomerIdInSysTime(decimal cusId)
       {
      return _reservationService.GetReservationBycustomerIdInSysTime(cusId);
    }



  }
}
