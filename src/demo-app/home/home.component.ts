import {Component} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {MdButton} from '@angular2-material/button'
import {BsInputContainer} from '../../main';

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  directives: [
    BsInputContainer,
    MdButton,
    FORM_DIRECTIVES
  ]
})

export class HomeComponent {
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
