using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Service
{
    public interface IJWTService
    {
        public RegisterDTO Auth(string email, string pass);
        public string Authion(string email, string pass);
    }
}
