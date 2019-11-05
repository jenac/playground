using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;  
using Microsoft.EntityFrameworkCore;
using spa_react.Entities;

namespace spa_react.Data
{  
    public class EmployeeContext : DbContext  
    {  
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)  
        {  
  
        }  
        public DbSet<tblSkill> tblSkills { get; set; }  
        public DbSet<tblEmployee> tblEmployees { get; set; }  
    }  
}  