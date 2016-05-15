import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES} from '../../main';

@Component({
  selector: 'toggle',
  template: require('./toggle.component.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})

export class ToggleComponent {
  form: ControlGroup;
  
  code: string = require('!!raw!./toggle.component.ts');

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      jobTitle: ['', Validators.required]
    });
    this.form.exclude('jobTitle');
  }

  onSubmit() {
  }
}
