import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Funcionario } from './../../models/Funcionario';
import { FuncionarioService } from '../../services/funcionario.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'funcionario-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FuncionarioService]
})
export class FormComponent implements OnInit {
  form: FormGroup;
  funcionario: Funcionario = new Funcionario();

  constructor(public dialog: MatDialog, private fb: FormBuilder, private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      salario: [null, Validators.required]
    });
  }

  postFunctionario() {
    if (this.form.valid) {
      let obj = {
        nome: this.form.get("nome").value,
        email: this.form.get("email").value,
        salario: this.form.get("salario").value
      };
      this.funcionarioService.postFuncionario(obj).subscribe(data => {
        this.funcionario = new Funcionario(data);
        this.openDialog();
      });
    }
  }

  openDialog() {
    this.dialog.open(FormDialog, { data: this.funcionario })
      .afterClosed().subscribe(result => { this.form.reset(); });
  }

}

@Component({
  selector: 'form-dialog',
  templateUrl: 'form.template.dialog.html',
  styleUrls: ['./form.component.css']
})
export class FormDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
