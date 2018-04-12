using Esx.Api.Models;
using Esx.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Esx.Api.Controllers
{
    [Route("api/funcionario")]
    public class FuncionarioController : Controller
    {

        // POST api/values
        [Route("v1")]
        [HttpPost]
        public object Post([FromBody]DadosFuncionarioModel obj)
        {
            Funcionario funcionario = new Funcionario(obj.Nome, obj.Email, obj.Salario);
            funcionario.AplicarImposto();

            return funcionario;
        }
    }
}
