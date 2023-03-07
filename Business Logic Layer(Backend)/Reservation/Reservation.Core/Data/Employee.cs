using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Reservation.Core.Data
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public float Salary { get; set; }
        public DateTime HireDate { get; set; } 
        public int RegisterId { get; set; }
        [ForeignKey("RegisterId")]
        public int RoleId { get; set; }
        [ForeignKey("RoleId")]
        public virtual Register Register { get; set; }
        public virtual Role Role { get; set; }
    }
}
