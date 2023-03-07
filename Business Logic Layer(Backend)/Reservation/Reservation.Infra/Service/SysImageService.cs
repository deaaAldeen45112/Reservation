using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class SysImageService: ISysImageService
    {
        private readonly ISysImageRepository _sysImageRepository;
        public SysImageService(ISysImageRepository sysImageRepository)
        {
            _sysImageRepository = sysImageRepository;
        }

        public bool AddSysImage(SysImage sysImage)
        {
            return _sysImageRepository.AddSysImage(sysImage);
        }

        public bool DeleteSysImage(int id)
        {
            return _sysImageRepository.DeleteSysImage(id);
        }

        public List<SysImage> GetAllSysImages()
        {
            return _sysImageRepository.GetAllSysImages();
        }

        public List<SysImage> GetSysImagesByName(string name)
        {
            return _sysImageRepository.GetSysImagesByName(name);
        }

        public bool UpdateSysImage(SysImage sysImage)
        {
            return _sysImageRepository.UpdateSysImage(sysImage);
        }
    }
}
