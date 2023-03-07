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
    public class IndexRepository:IIndexRepository
    {
        private readonly IDbContext _dbContext;
        public IndexRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public bool UpdateIndex(IndexTable indexTable)
        {
            var p = new DynamicParameters();
            p.Add("P_Id", indexTable.id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            p.Add("p_Bg_path", indexTable.Bg_Path, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("p_video_link", indexTable.video_link, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("p_welcome_sentence", indexTable.welcome_sentence, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("INDEX_PACKAGE.update_index", p, commandType: CommandType.StoredProcedure);
            return true;
        }
        public List<IndexTable> GetIndexTable()
        {
            IEnumerable<IndexTable> result= _dbContext.Connection.Query<IndexTable>("INDEX_PACKAGE.Getindex", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

  }
}
