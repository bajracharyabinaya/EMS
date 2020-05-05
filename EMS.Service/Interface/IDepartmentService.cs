using EMS.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EMS.Service.Interface
{
    public interface IDepartmentService
    {
        IEnumerable<DepartmentViewModel> GetAll();
    }
}
