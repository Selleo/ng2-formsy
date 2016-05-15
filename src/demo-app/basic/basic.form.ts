import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES} from 'ng2-formsy';

@Component({
  selector: 'basic-form',
  template: '<!-- template -->',
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})
export class BasicForm {
  form: ControlGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+')
      ])]
    });
  }

  onSubmit() {
  }
}
