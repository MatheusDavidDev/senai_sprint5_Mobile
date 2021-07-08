using Projeto_Roman_API.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman_API.Interfaces
{
    interface IProjetosRepository
    {
        List<Projeto> Listar();

        void Cadastrar(Projeto novoProjeto);

        Projeto BuscarPorId(int id);

        void Deletar(int id);
    }
}
