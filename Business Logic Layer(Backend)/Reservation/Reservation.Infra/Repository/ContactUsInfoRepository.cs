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
    public class ContactUsInfoRepository : IContactUsInfoRepository
    {
        private readonly IDbContext _dbContext;
        public ContactUsInfoRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool UpdateContactUsInfo(ContactUsInfo contactUsInfo)
        {
            var p = new DynamicParameters();
            p.Add("P_ID", contactUsInfo.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_LOCATION", contactUsInfo.Location, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_EMAIL", contactUsInfo.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_PHONE", contactUsInfo.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_SITE_MAP", contactUsInfo.Site_Map, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_OPEN_HOURS", contactUsInfo.Open_Hours, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_OPEN_DAYS", contactUsInfo.Open_Days, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("CONTACTUS_INFO_PACKAGE.UPDATE_CONTACTUS_INFO", p, commandType: CommandType.StoredProcedure);
            return true;

        }
        public List<ContactUsInfo> GetContactUsInfo()
        {
            IEnumerable<ContactUsInfo> result = _dbContext.Connection.Query<ContactUsInfo>("CONTACTUS_INFO_PACKAGE.GetContactUsInfo", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
    }
}
