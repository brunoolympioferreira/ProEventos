import { ValidatorField } from './../../../helpers/validatorField';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControlOptions, Validators,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  form: FormGroup;

  get f(): any { return this.form.controls; }


  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.validation();
  }

  private validation(): void {
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.mustMatch('senha', 'confirmeSenha')
    };

    this.form = this.fb.group({
      titulo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
      descricao: ['', Validators.required],
      funcao: ['', Validators.required],
      senha: ['', [Validators.minLength(6), Validators.required]],
      confirmeSenha: ['', Validators.nullValidator]
    }, formOptions);
  }

  onSubmit(): void {
    if(this.form.invalid){
      return;
    }
  }

  public resetForm(event: any): void {
    event.preventDefault();
    this.form.reset();
  }

}
