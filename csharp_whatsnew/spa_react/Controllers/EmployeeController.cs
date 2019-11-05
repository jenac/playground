using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using spa_react.Data;
using spa_react.Models;
using spa_react.Entities;

namespace spa_react.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext _dbContext;
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(ILogger<EmployeeController> logger, EmployeeContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        public IEnumerable<EmployeeViewModel> Get()
        {

            var _emplst = _dbContext.tblEmployees.  
                            Join(_dbContext.tblSkills, e => e.SkillID, s => s.SkillID,  
                            (e, s) => new EmployeeViewModel  
                            { EmployeeID = e.EmployeeID, EmployeeName = e.EmployeeName,  
                                PhoneNumber = e.PhoneNumber, Skill = s.Title,  
                                YearsExperience = e.YearsExperience }).ToList();  
            IList<EmployeeViewModel> emplst  = _emplst;  
            return emplst;  
        }
    }
}
