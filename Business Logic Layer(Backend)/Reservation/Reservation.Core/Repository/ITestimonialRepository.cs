using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface ITestimonailRepositroy
    {

        public bool InsertTestimonial(Testimonial testimonial);
        public List<Testimonial> GetTestimonials();

    }
}
