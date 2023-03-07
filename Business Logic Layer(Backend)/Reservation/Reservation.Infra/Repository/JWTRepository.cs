using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class JWTRepository :IJWTRepository
    {
        private readonly IDbContext _dbContext;
        public JWTRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public RegisterDTO Auth(string email,string pass)
        {
            var p = new DynamicParameters();
            p.Add("P_Email", email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_Password", pass, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<RegisterDTO> result = _dbContext.Connection.Query<RegisterDTO>("Login_Package.Login_Auth", p, commandType: CommandType.StoredProcedure);
            return result.FirstOrDefault();
        } 
        
    }
}
