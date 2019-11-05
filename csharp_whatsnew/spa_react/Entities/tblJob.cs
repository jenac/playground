using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace spa_react.Entities
{
    public class tblJob  {
        [Key]
        public int JobID { get; set; }

        public string Title { get; set; }
        public string Department { get; set; }
        public int YearsOfService { get; set; }
    }
}