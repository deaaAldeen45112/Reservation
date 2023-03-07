using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;
using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class ContactUsRepository:IContactUsRepository
    {
        private readonly IDbContext _dbContext;
        public ContactUsRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public List<ContactUs> GetAllContactUs()
        {
            IEnumerable<ContactUs> result = _dbContext.Connection.Query<ContactUs>("CONTACT_US_PACKAGE.GET_ALL_CONTACT_US", commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public List<ContactUs> GetContactUsBySubject(string subject)
        {
            var p = new DynamicParameters();
            p.Add("P_SUBJECT", subject, dbType: DbType.String, direction: ParameterDirection.Input);
            IEnumerable<ContactUs> result = _dbContext.Connection.Query<ContactUs>("CONTACT_US_PACKAGE.GET_CONTACT_US_BY_SUBJECT", p, commandType: CommandType.StoredProcedure);
            return result.ToList();
        }
        public bool AddContactUs(ContactUs contactUs)
        {
            var p = new DynamicParameters();
            p.Add("P_NAME", contactUs.Name, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_EMAIL", contactUs.Email, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_PHONE", contactUs.Phone, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_SUBJECT", contactUs.Subject, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("P_MESSAGE", contactUs.Message, dbType: DbType.String, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("CONTACT_US_PACKAGE.CREATE_CONTACT_US", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
