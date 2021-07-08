using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto_Roman_API.Interfaces;
using Projeto_Roman_API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman_API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class TemaController : ControllerBase
    {
        private ITemaRepository _temaRepository { get; set; }

        public TemaController()
        {
            _temaRepository = new TemaRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_temaRepository.Listar());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
