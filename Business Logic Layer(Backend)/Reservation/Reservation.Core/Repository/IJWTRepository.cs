using Reservation.Core.Data;
using Reservation.Core.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Reservation.Core.Repository
{
    public interface IJWTRepository
    {
        public RegisterDTO Auth(string email,string pass);
    }
}
