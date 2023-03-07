using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface ISysImageService
    {
        public bool AddSysImage(SysImage sysImage);
        public bool UpdateSysImage(SysImage sysImage);
        public bool DeleteSysImage(int id);
        public List<SysImage> GetAllSysImages();
        public List<SysImage> GetSysImagesByName(string name);
    }
}
