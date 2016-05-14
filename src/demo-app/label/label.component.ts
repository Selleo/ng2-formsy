import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES} from '../../main';

@Component({
  selector: 'label',
  template: require('./label.component.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})

export class LabelComponent {
  form: ControlGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
  }
}
