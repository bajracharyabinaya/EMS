using EMS.Core.Interface;
using EMS.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace EMS.Core
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly EMSContext _databaseContext;

        public UnitOfWork(EMSContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public void Dispose()
        {
            this._databaseContext.Dispose();
        }

        public async Task Commit()
        {
            await this._databaseContext.SaveChangesAsync();
        }

    
    }
}
