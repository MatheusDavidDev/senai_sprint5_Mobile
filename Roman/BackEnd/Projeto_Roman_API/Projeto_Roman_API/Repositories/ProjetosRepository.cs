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
    public class ProjetosRepository : IProjetosRepository
    {
        RomanContext ctx = new RomanContext();

        public Projeto BuscarPorId(int id)
        {
            return ctx.Projetos.FirstOrDefault(p => p.IdProjeto == id);
        }

        public void Cadastrar(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);

            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Projeto projetoBuscado = ctx.Projetos.Find(id);

            ctx.Projetos.Remove(projetoBuscado);

            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos
                .Include(p => p.IdTemaNavigation)
                .Include(p => p.IdUsuarioNavigation)
                .Select(p => new Projeto
                {
                    IdProjeto = p.IdProjeto,
                    Titulo = p.Titulo,

                    IdTemaNavigation = new Tema
                    {
                        IdTema = p.IdTemaNavigation.IdTema,
                        Tema1 = p.IdTemaNavigation.Tema1
                    },

                    IdUsuarioNavigation = new Usuario
                    {
                        IdUsuario = p.IdUsuarioNavigation.IdUsuario,
                        Nome    = p.IdUsuarioNavigation.Nome,
                    }
                }).ToList();
            
            
        }
    }
}
