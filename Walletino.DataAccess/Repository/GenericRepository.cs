using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Walletino.Core.Repository;
using Walletino.DataAccess.Database;

namespace Walletino.DataAccess.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class 
    {
        private readonly WalletinoDbContext _context;
        private readonly DbSet<T> _entity;

        public GenericRepository(WalletinoDbContext context)
        {
            _context = context;
            _entity = context.Set<T>();
        }

        public async Task<T> Add(T entity)
        {
            await _entity.AddAsync(entity);
            return entity;
        }

        public async Task<IEnumerable<T>> AddRange(IEnumerable<T> entities)
        {
            await _entity.AddRangeAsync(entities);
            return entities;
        }

        public async Task<T> Update(T entity)
        {
            _entity.Update(entity);
            return entity;
        }

        public async Task<IEnumerable<T>> UpdateRange(IEnumerable<T> entities)
        {
            _entity.UpdateRange(entities);
            return entities;
        }

        public async Task<T> Delete(int id)
        {
            var entity = await _entity.FindAsync(id);
            _entity.Remove(entity);
            return entity;
        }
 
        public async Task<IEnumerable<T>> GetAll()
        {
            return await _entity.ToListAsync();
        }

        public Task<T> GetById(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
