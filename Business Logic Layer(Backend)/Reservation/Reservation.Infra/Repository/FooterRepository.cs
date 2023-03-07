using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class FooterRepository: IFooterRepository
    {
        private readonly IDbContext _dbContext;
        public FooterRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public bool UpdateFooter(Footer footer)
        {
            var p = new DynamicParameters();
            p.Add("P_FOOTER_ID", footer.Footer_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("P_COPYRIGHT_NOTICE", footer.Copyright_Notice, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_SITE_MAP", footer.Site_Map, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_EMAIL", footer.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_LOCATION", footer.Location, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("FOOTER_PACKAGE.UPDATE_FOOTER", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<Footer> GetFooter()
        {
            IEnumerable<Footer> result = _dbContext.Connection.Query<Footer>("FOOTER_PACKAGE.GET_FOOTER", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
        public List<FooterDTO> GetFooterHeader()
        {
            IEnumerable<FooterDTO> result=_dbContext.Connection.Query<FooterDTO>("FOOTER_PACKAGE.GET_FOOTER_H", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
    }
}
