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
    public class HeaderController : Controller
    {
        private readonly IHeaderService _headerService;
        public HeaderController(IHeaderService headerService)
        {
            _headerService = headerService;
        }
        [HttpPost]
        [Route("{action}")]
        public string UploadImage()
        {
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;

                var fullPath = Path.Combine("Images/" + fileName);

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                SysImage image = new SysImage();
                image.Image_Path = fileName;
                return image.Image_Path;

            }
            catch (Exception e)
            {
                return null;
            }
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateHeader([FromBody]Header header)
        {
            return _headerService.UpdateHeader(header);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<Header>), statusCode: StatusCodes.Status200OK)]
        public List<Header> GetHeader()
        {
            return _headerService.GetHeader();
        }
    }
}
