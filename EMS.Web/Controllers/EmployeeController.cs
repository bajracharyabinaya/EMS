using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMS.Data.ViewModel;
using EMS.Service.Interface;
using EMS.Service;

namespace EMS.Web.Controllers
{
    [Produces("application/json")]
    public class EmployeeController : Controller
    {
        private IEmployeeService employeeService;

        public EmployeeController(IEmployeeService service)
        {
            this.employeeService = service;
        }
        [HttpGet]
        [Route("api/Employee/GetAll")]
        public IActionResult GetAll()
        {

            var eMployee = employeeService.GetAll();
            if (eMployee.Count() > 0)
            {
                return Ok(eMployee.ToList());
            }
            return NotFound();


        }
        [HttpPost]
        [Route("api/Employee/deleteEmployee")]
        public IActionResult DeleteEmployee([FromBody] EMployeeViewModel eMployeeViewModel)
        {
                var delete = employeeService.DeleteEmp(eMployeeViewModel);
                if (delete > 0)
                {
                    return Ok();
                }
            return NotFound();

        }
        [HttpPost]
        [Route("api/Employee/addEmployee")]
        public IActionResult AddEmployee([FromBody] EMployeeViewModel eMployeeViewModel)
        {
            var add = employeeService.AddEmp(eMployeeViewModel);
            if (add > 0)
            {
                return Ok();
            }
            return NotFound();

        }
        [HttpPost]
        [Route("api/Employee/updateEmployee")]
        public IActionResult UpdateEmployee([FromBody] EMployeeViewModel eMployeeViewModel)
        {
            var update = employeeService.UpdateEmp(eMployeeViewModel);
            if (update > 0)
            {
                return Ok();
            }
            return NotFound();

        }

        [HttpGet]
        [Route("api/Employee/getEmployee")]
        public IActionResult GetEmployee([FromQuery(Name = "empId")] int empId)
        {
            var getEmp = employeeService.GetByID(empId);
            if (getEmp!=null)
            {
                return Ok(getEmp);
            }
            return NotFound();

        }
    }
}