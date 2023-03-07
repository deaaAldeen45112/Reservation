using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Reservation.Core.Data
{
    public class Table
    {
        [Key]
        public int Table_Id { get; set; }
        public int Max_Person { get; set; }
        public string Image_Location { get; set; }
        public string Details { get; set; }
        }
}
