export class Funcionario {
  nome: string = '';
  email: string = '';
  salarioBruto: number = 0;
  salarioLiquido: number = 0;
  imposto: number = 0;
  uno: number = 0;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
