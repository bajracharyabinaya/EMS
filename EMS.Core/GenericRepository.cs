using EMS.Core.Interface;
using EMS.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace EMS.Core
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly EMSContext _DbContext;
        private readonly DbSet<T> _DbSet;

        public GenericRepository(EMSContext dbContext)
        {
            this._DbContext = dbContext;
            this._DbSet = this._DbContext.Set<T>();
        }

        public void Delete(T entity)
        {
            this._DbSet.Remove(entity);
        }
        public IEnumerable<T> GetAll()
        {
            return this._DbSet.ToList();
        }

        public T GetByKey(int id)
        {
            return this._DbSet.Find(id);
        }

        public void Insert(T entity)
        {
            this._DbSet.Add(entity);
        }

        public void Update(T entity)
        {
            this._DbSet.Attach(entity);
            this._DbContext.Entry(entity).State = EntityState.Modified;
           
        }
        public int Save()
        {
          return _DbContext.SaveChanges();
        }

        private bool _disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    _DbContext.Dispose();
                }
            }
            this._disposed = true;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
