import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES} from '../../main';

@Component({
  selector: 'signup',
  template: require('./signup.component.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class SignupComponent {
  form: ControlGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit() {
  }
}
