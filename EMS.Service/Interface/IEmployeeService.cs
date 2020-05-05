using EMS.Data.Models;
using EMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EMS.Service.Interface
{
    public interface IEmployeeService
    {
        IEnumerable<EMployeeViewModel> GetAll();
        EMployeeViewModel GetByID(int id);
        int UpdateEmp(EMployeeViewModel model);
        int AddEmp(EMployeeViewModel model);
        int DeleteEmp(EMployeeViewModel model);
    }
}
