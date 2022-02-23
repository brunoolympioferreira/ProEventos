using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IEventoPersist
    {
        Task<Evento[]> GetAllEventosByTemaAsync(int userid, string tema, bool includePalestrantes = false);
        Task<Evento[]> GetAllEventosAsync(int userid, bool includePalestrantes = false);
        Task<Evento> GetEventoByIdAsync(int userid, int eventoId, bool includePalestrantes = false);
    }
}