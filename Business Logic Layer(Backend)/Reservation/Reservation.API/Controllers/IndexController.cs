using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
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
    public class IndexController : Controller
    {
        private readonly IIndexService _indexService;
        public IndexController(IIndexService indexService)
        {
            _indexService = indexService;
        }
        [HttpPost]
        [Route("{action}")]
        public string UploadImage()
        {
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;

                var fullPath = Path.Combine(@"C:/Users/Toshiba/Desktop/ReservationProject/ReservationAngular/src/assets/img/Index/" + fileName);

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
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<IndexTable>), statusCode: StatusCodes.Status200OK)]
        public List<IndexTable> GetIndexTable()
        {
            return _indexService.GetIndexTable();
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType( statusCode: StatusCodes.Status200OK)]
        public bool UpdateIndex([FromBody] IndexTable indexTable)
        {
            return _indexService.UpdateIndex(indexTable);
        }
    }
}
