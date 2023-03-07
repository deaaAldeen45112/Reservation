using Dapper;
using Reservation.Core.Common;
using Reservation.Core.Data;

using Reservation.Core.Repository;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;

namespace Reservation.Infra.Repository
{
    public class TestimonialRepository: ITestimonailRepositroy
    {
        private readonly IDbContext _dbContext;
        public TestimonialRepository(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Testimonial> GetTestimonials()
        {
            IEnumerable<Testimonial> result = _dbContext.Connection.Query<Testimonial>("testimonial_package.get_testimonials", commandType: CommandType.StoredProcedure);
            return result.AsList();
        }

        public bool InsertTestimonial(Testimonial testimonial)
        {


            Debug.WriteLine(testimonial.Testimonial_Message);
            var p = new DynamicParameters();
            p.Add("p_testimonial_message", testimonial.Testimonial_Message, dbType: DbType.String, direction: ParameterDirection.Input);
            p.Add("p_customer_id", testimonial.Customer_Id, dbType: DbType.Int32, direction: ParameterDirection.Input);
            var result = _dbContext.Connection.ExecuteAsync("testimonial_package.add_testimonial", p, commandType: CommandType.StoredProcedure);
            return true;
        }
    }
}
