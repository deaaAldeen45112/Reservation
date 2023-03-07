using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditController : Controller
    {
        private readonly ICreditService _creditSrevice;

        public CreditController(ICreditService creditSrevice)
        {
            _creditSrevice = creditSrevice;
        }

        [HttpDelete]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteCreditByCreditId(decimal creditId)
        {
            return _creditSrevice.DeleteCreditByCreditId(creditId);
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Credit>), statusCode: StatusCodes.Status200OK)]
        public List<Credit> GetAllCredit()
        {
            return _creditSrevice.GetAllCredit();
        }

        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Credit>), statusCode: StatusCodes.Status200OK)]
        public List<Credit> GetCreditByCreditNumber(string creditNumber)
        {
            return _creditSrevice.GetCreditByCreditNumber(creditNumber);
        }

        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType( statusCode: StatusCodes.Status200OK)]
        public bool InsertCredit([FromBody]Credit credit)
        {
            return _creditSrevice.InsertCredit(credit);
        }

        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateCredit([FromBody]Credit credit)
        {
            return _creditSrevice.UpdateCredit(credit);
        }

        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdeteAmountByCreditNumber([FromBody] Credit credit)
        {
            return _creditSrevice.UpdeteAmountByCreditNumber(credit);
        }
    }
}
