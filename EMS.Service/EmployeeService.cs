using EMS.Core.Interface;
using EMS.Data.Models;
using EMS.Service.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using EMS.Data.ViewModel;
using System.Linq;

namespace EMS.Service
{
    public class EmployeeService : IEmployeeService
    {
        private IUnitOfWork _unitofWork;
        private IGenericRepository<Employee> _genericRepository;

        public EmployeeService(IUnitOfWork unitofwork, IGenericRepository<Employee> genericrepository)
        {
            this._unitofWork = unitofwork;
            this._genericRepository = genericrepository;

        }

        public int DeleteEmp(EMployeeViewModel model)
        {
            var emp = new Employee
            {
                EmpId = model.EmpId,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address= model.Address,
                Gender= model.Gender,
                Phone= model.Phone,
                DeptName= model.DeptName
            };
            _genericRepository.Delete(emp);
           return _genericRepository.Save();
        }
        public int AddEmp(EMployeeViewModel model)
        {
            var emp = new Employee
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address = model.Address,
                Gender = model.Gender,
                Phone = model.Phone,
                DeptName = model.DeptName
            };
            _genericRepository.Insert(emp);
            return _genericRepository.Save();
        }
        public IEnumerable<EMployeeViewModel> GetAll()
        {
          var emptList = _genericRepository.GetAll().Select(dp => new EMployeeViewModel
          {
              EmpId = dp.EmpId,
            Address = dp.Address,
            FirstName= dp.FirstName,
            LastName=dp.LastName,
            Gender= dp.Gender,
            Phone= dp.Phone,
            DeptName=dp.DeptName

          });
          return emptList;
        }

        public EMployeeViewModel GetByID(int id)
        {
            var model = _genericRepository.GetByKey(id);
            var empModel = new EMployeeViewModel
            {
                EmpId = model.EmpId,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address = model.Address,
                Gender = model.Gender,
                Phone = model.Phone,
                DeptName = model.DeptName
            };
            return empModel;
        }

        public int UpdateEmp(EMployeeViewModel model)
        {
            var emp = new Employee
            {
                EmpId = model.EmpId,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Address = model.Address,
                Gender = model.Gender,
                Phone = model.Phone,
                DeptName = model.DeptName
            };
            _genericRepository.Update(emp);
            return _genericRepository.Save();
        }
    
    }
}
