using System;
using System.Collections.Generic;
using System.Text;

namespace Esx.Domain.Entities
{
    public class Funcionario
    {
        public Funcionario(string nome, string email, float salario)
        {
            Nome = nome;
            Email = email;
            SalarioBruto = salario;
        }

        public string Nome { get; private set; }
        public string Email { get; private set; }
        public float SalarioBruto { get; private set; }
        public float SalarioLiquido { get; private set; }
        public float Imposto { get; private set; }

        public void AplicarImposto()
        {
            if (SalarioBruto < 3000)
                Imposto = 0;
            else if (SalarioBruto >= 3000 && SalarioBruto <= 5000)
                Imposto = 0.10F;
            else if (SalarioBruto >= 5000 && SalarioBruto <= 7000)
                Imposto = 0.15F;
            else if (SalarioBruto >= 7001)
                Imposto = 0.25F;

            SalarioLiquido = SalarioBruto - (SalarioBruto * Imposto);
        }
    }
}
