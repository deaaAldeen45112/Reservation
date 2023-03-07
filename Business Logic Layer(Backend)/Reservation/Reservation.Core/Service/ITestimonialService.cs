using Reservation.Core.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface ITestimonialService
    {
        public bool InsertTestimonial(Testimonial testimonial);
        public List<Testimonial> GetTestimonials();
    }
}
