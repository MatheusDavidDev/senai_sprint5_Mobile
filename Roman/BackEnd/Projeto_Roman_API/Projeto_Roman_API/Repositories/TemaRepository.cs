using Microsoft.EntityFrameworkCore;
using Projeto_Roman_API.Contexts;
using Projeto_Roman_API.Domains;
using Projeto_Roman_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman_API.Repositories
{
    public class TemaRepository : ITemaRepository
    {
        RomanContext ctx = new RomanContext();
        public List<Tema> Listar()
        {
            return ctx.Temas.ToList();
        }
    }
}
