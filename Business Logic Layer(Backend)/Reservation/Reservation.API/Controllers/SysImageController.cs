using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Reservation.Core.Data;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Reservation.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SysImageController : Controller
    {
        private readonly ISysImageService _sysImageService;
        
        public SysImageController(ISysImageService sysImageService)
        {
            _sysImageService = sysImageService;
        }
        [HttpPost]
        [Route("{action}")]
        public string UploadImage()
        {
            try
            {
                var file = Request.Form.Files[0];
                var fileName = Guid.NewGuid().ToString() + "_" + file.FileName;

                var fullPath = Path.Combine(@"C:/Users/Toshiba/Desktop/ReservationProject/ReservationAngular/src/assets/img/SysImages/" + fileName);

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
        public bool AddSysImage([FromBody]SysImage sysImage)
        {
            return _sysImageService.AddSysImage(sysImage);
        }
        [HttpPut]
        [Route("{action}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool UpdateSysImage([FromBody]SysImage sysImage)
        {
            return _sysImageService.UpdateSysImage(sysImage);
        }
        [HttpDelete]
        [Route("{action}/{id}")]
        [ProducesResponseType(statusCode: StatusCodes.Status200OK)]
        public bool DeleteSysImage(int id)
        {
            return _sysImageService.DeleteSysImage(id);
        }
        [HttpGet]
        [Route("{action}")]
        [ProducesResponseType(typeof(List<SysImage>), statusCode: StatusCodes.Status200OK)]
        public List<SysImage> GetAllSysImages()
        {
            return _sysImageService.GetAllSysImages();
        }
        [HttpGet]
        [Route("{action}/{name}")]
        [ProducesResponseType(typeof(List<SysImage>), statusCode: StatusCodes.Status200OK)]
        public List<SysImage> GetSysImagesByName(string name)
        {
            return _sysImageService.GetSysImagesByName(name);
        }
    }
}
