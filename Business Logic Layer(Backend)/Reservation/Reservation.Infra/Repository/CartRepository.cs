using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.Repository;
namespace Reservation.Infra.Repository
{
    public class CartRepository : ICartRepository
    {
        private readonly IDbContext _dbContext;
        public CartRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<Cart> GetCartByRegisterId(decimal regId)
        {
            var p = new DynamicParameters();
            p.Add("regId",regId, dbType: DbType.Int32, direction: ParameterDirection.Input);
            IEnumerable<Cart> result = _dbContext.Connection.Query<Cart>("cart_package.GetCartByRegisterId", p, commandType: CommandType.StoredProcedure);
            return result.AsList();
        }
    }
}
