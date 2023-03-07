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
    public class AboutUsRepository: IAboutUsRepository
    {
        private readonly IDbContext _dbContext;
        public AboutUsRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool UpdateAboutUs(AboutUs aboutUs)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", aboutUs.Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_about_us_body", aboutUs.About_Us_Body, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("about_us_package.update_about_us", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<AboutUs> GetAboutUs()
        {
            IEnumerable<AboutUs> result=_dbContext.Connection.Query<AboutUs>("about_us_package.GetAboutUs", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
    }
}
