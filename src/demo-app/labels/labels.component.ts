import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES} from '../../main';

@Component({
  selector: 'labels',
  template: require('./labels.component.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})

export class LabelsComponent {
  form: ControlGroup;

  codeTs: string = require('!!raw!./labels.component.ts');
  codeHtml: string = require('!!raw!./labels.component.html');

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
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
