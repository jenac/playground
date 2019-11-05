using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Threading.Tasks;  
using Microsoft.EntityFrameworkCore;
using spa_react.Entities;

namespace spa_react.Data
{  
    public class HRContext : DbContext  
    {  
        public HRContext(DbContextOptions<HRContext> options) : base(options)  
        {  
  
        }  
        public DbSet<tblJob> tblJobs {get; set;}
    }  
}  