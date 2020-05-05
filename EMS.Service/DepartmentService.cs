using EMS.Service.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using EMS.Data.ViewModel;
using EMS.Core.Interface;
using EMS.Data.Models;
using EMS.Core;
using System.Linq;

namespace EMS.Service
{
    public class DepartmentService : IDepartmentService
    {
        private IUnitOfWork _unitofWork;
        private IGenericRepository<Department> _genericRepository;

        public DepartmentService(IUnitOfWork unitofwork, IGenericRepository<Department> genericrepository)
        {
            this._unitofWork = unitofwork;
            this._genericRepository = genericrepository;

        }
        public IEnumerable<DepartmentViewModel> GetAll()
        {
            var deptList = _genericRepository.GetAll().Select(dp => new DepartmentViewModel
            {
                DeptNo = dp.DeptNo,
                DeptName= dp.DeptName
            });
            return deptList;
        }
    }
}
