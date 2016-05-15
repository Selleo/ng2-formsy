import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES} from 'ng2-formsy';

@Component({
  selector: 'signup-form',
  template: require('./signup.form.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class SignupForm {
  form: ControlGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      company: ['', Validators.required],
      jobTitle: ['', Validators.required]
    });
    this.form.exclude('jobTitle');
  }

  onSubmit() {
  }
}
