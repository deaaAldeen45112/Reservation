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
    public class HeaderRepository:IHeaderRepository
    {
        private readonly IDbContext _dbContext;
        public HeaderRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool UpdateHeader(Header header)
        {
            var p = new DynamicParameters();
            p.Add("P_HEADER_ID", header.Header_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_LOGO_IMAGE", header.Logo_Image, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_PROJECT_NAME", header.Project_Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_PHONE", header.PHONE, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_OPEN_DAYS", header.OPENING_DAYS, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_OPEN_HOURS", header.OPENING_HOURS, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("HEADER_PACKAGE.UPDATE_HEADER", p, commandType: CommandType.StoredProcedure);
            return true;
        }

        public List<Header> GetHeader()
        {
            IEnumerable<Header> header = _dbContext.Connection.Query<Header>("HEADER_PACKAGE.Get_HEADER", commandType: CommandType.StoredProcedure);
            return header.AsList();
        }
    }
}
