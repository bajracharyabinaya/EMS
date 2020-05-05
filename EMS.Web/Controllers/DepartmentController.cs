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
    public class DepartmentController : Controller
    {
        private IDepartmentService departmentService;

        public DepartmentController(IDepartmentService service)
        {
            this.departmentService = service;
        }
        [HttpGet]
        [Route("api/Department")]
        public IEnumerable<DepartmentViewModel> GetAll()
        {

            var Persons = departmentService.GetAll();
            return Persons.ToList();

        }

    }
}