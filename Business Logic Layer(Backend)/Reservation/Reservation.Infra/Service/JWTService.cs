using Microsoft.IdentityModel.Tokens;
using Reservation.Core.Data;
using Reservation.Core.DTO;
using Reservation.Core.Repository;
using Reservation.Core.Service;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Reservation.Infra.Service
{
    public class JWTService : IJWTService
    {
        private readonly IJWTRepository _jwtRepository;
        public JWTService(IJWTRepository jwtRepository)
        {
            _jwtRepository = jwtRepository;
        }
        

       public RegisterDTO Auth(string email,string pass)
        {
            return _jwtRepository.Auth(email,pass);
        }

        public string Authion(string email,string pass) {
            var result = _jwtRepository.Auth(email,pass);
            if (result == null)
            {
                return null;
            }
            else
            {

                var tokenHandler = new JwtSecurityTokenHandler();
                var tokenKey = Encoding.ASCII.GetBytes("[123456789123456789123456789123456789]");
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Email, result.Email),
                        new Claim(ClaimTypes.Role, result.Role_Name),
               
                        new Claim(type:"registerId",result.Id.ToString())


                        ,
                        new Claim(type:"roleId",result.Role_id.ToString())


                    }
                    ),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
                };
                var token = tokenHandler.CreateToken(tokenDescriptor);
                return tokenHandler.WriteToken(token);
            }

        }








    }
}
