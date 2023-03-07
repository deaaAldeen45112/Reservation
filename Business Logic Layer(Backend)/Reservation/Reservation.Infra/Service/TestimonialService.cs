using Reservation.Core.Data;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Infra.Service
{
    public class TestimonialService : ITestimonialService
    {
        private readonly ITestimonailRepositroy _testimonialRepositroy;
        public TestimonialService(ITestimonailRepositroy testimonialRepositroy)
        {
            _testimonialRepositroy = testimonialRepositroy;
        }
        public List<Testimonial> GetTestimonials()
        {
            return _testimonialRepositroy.GetTestimonials();
        }

        public bool InsertTestimonial(Testimonial testimonial)
        {
            return _testimonialRepositroy.InsertTestimonial(testimonial);
        }
    }
}
