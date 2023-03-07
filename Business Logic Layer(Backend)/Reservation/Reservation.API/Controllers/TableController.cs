using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TableController : Controller
    {
        private readonly ITableService _tableService;
        public TableController(ITableService tableService)
        {
            _tableService = tableService;
        }
        [HttpPost]
        [Route("{action}")]
        public string UploadImage()
        {
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;

                var fullPath = Path.Combine(@"C:/Users/Toshiba/Desktop/Reservation/ReservationProject/src/assets/img/Tables/" + fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                return fileName;

            }
            catch (Exception e)
            {
                return null;
            }
        }

        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool AddTable([FromBody] Table table)
        {
            return _tableService.AddTable(table);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Table>), statusCode: StatusCodes.Status200OK)]
        public List<Table> GetAllTables()
        {

            return _tableService.GetAllTables();
        }
        [HttpDelete]
        [Route("{action}/{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteTable(int id)
        {
            try
            {
                var res = CheckReservationsOnTable(id);
                if (res == 0)
                {
                    return _tableService.DeleteTable(id);
                }
                else
                {
                    return false;
                }
            }
            catch (Exception e)
            {
                return false;//Return SomeThing
            }
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(typeof(Table), statusCode: StatusCodes.Status200OK)]
        [ProducesResponseType(statusCode: StatusCodes.Status400BadRequest)]
        public bool UpdateTable([FromBody] Table table)
        {
            return _tableService.UpdateTable(table);
        }
        [HttpGet]
        [Route("{action}/{chairs}")]
        [ProducesResponseType(typeof(List<Table>), statusCode: StatusCodes.Status200OK)]
        public List<Table> FilterByNumberOfChairs(int chairs)
        {
            return _tableService.FilterByNumberOfChairs(chairs);
        }
        [HttpGet]
        [Route("{action}/{id}")]
        [ProducesResponseType(typeof(Table), statusCode: StatusCodes.Status200OK)]
        public Table GetByID(int id)
        {
            return _tableService.GetById(id);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Table>), statusCode: StatusCodes.Status200OK)]
        public List<Table> getTableByDate([FromBody] TableDTO tableDTO)
        {
            return _tableService.getTableByDate(tableDTO);
        }
        [HttpPost]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Table>), statusCode: StatusCodes.Status200OK)]
        public List<Table> getTableByDateAndPerson([FromBody] TableDTO tableDTO)
        {
            return _tableService.getTableByDateAndPerson(tableDTO);
        }
        [HttpPost]
        [Route("{action}/{id}")]
        [ProducesResponseType(typeof(List<Table>), statusCode: StatusCodes.Status200OK)]
        public int CheckReservationsOnTable(int id)
        {
            return _tableService.CheckReservationsOnTable(id);
        }

    }
}
