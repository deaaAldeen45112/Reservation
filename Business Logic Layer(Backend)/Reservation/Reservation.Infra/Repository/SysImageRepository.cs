using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class SysImageRepository : ISysImageRepository
    {
        private readonly IDbContext _dbContext;
        public SysImageRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool AddSysImage(SysImage sysImage)
        {
            var p = new DynamicParameters();
            p.Add("P_IMAGE_PATH", sysImage.Image_Path, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_IMAGE_NAME", sysImage.Image_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("SYS_IMAGE_PACKAGE.ADD_IMAGE", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool UpdateSysImage(SysImage sysImage)
        {
            var p = new DynamicParameters();
            p.Add("P_SYSIMAGE_ID", sysImage.SysImage_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_IMAGE_PATH", sysImage.Image_Path, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_IMAGE_NAME", sysImage.Image_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("SYS_IMAGE_PACKAGE.UPDATE_IMAGE", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public bool DeleteSysImage(int id)
        {
            var p = new DynamicParameters();
            p.Add("P_SYSIMAGE_ID", id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.Execute("SYS_IMAGE_PACKAGE.DELETE_IMAGE", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<SysImage> GetAllSysImages()
        {
            IEnumerable<SysImage> sysImages = _dbContext.Connection.Query<SysImage>("SYS_IMAGE_PACKAGE.GET_ALL_IMAGES", commandType: CommandType.StoredProcedure);
            return sysImages.AsList();
        }
        public List<SysImage> GetSysImagesByName(string name)
        {
            var p = new DynamicParameters();
            p.Add("P_IMAGE_NAME", name, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<SysImage> sysImages = _dbContext.Connection.Query<SysImage>("SYS_IMAGE_PACKAGE.GET_IMAGE_BY_NAME", p , commandType: CommandType.StoredProcedure);
            return sysImages.AsList();
        }
    }
}
