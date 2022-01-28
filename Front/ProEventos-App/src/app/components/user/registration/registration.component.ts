import { ValidatorField } from './../../../helpers/validatorField';
import { AbstractControl, AbstractControlOptions } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder) { }

  get f(): any {return this.form.controls; }

  ngOnInit(): void {
    this.validation();
  }

  private validation(): void {

    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.mustMatch('senha','confirmeSenha')
    };

    this.form = this.fb.group({
      primeiroNome: ['',Validators.required],
      ultimoNome: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      userName: ['',Validators.required],
      senha: ['',[Validators.required, Validators.minLength(6)]],
      confirmeSenha: ['',Validators.required],
    }, formOptions);
  }
}
