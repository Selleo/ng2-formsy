import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {MdButton} from '@angular2-material/button'
import {FORMSY_BS_DIRECTIVES} from '../../main';

@Component({
  selector: 'login',
  template: require('./login.component.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES,
    MdButton,
  ]
})

export class LoginComponent {
  form: ControlGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
  }
}
