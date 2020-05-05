using System;
using System.Collections.Generic;

namespace EMS.Data.Models
{
    public partial class Employee
    {
        public int EmpId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string DeptName { get; set; }
    }
}
