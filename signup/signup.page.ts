import {Component} from '@angular/core';
import {SignupForm} from './signup.form';

@Component({
  selector: 'basic-page',
  template: require('./signup.page.html'),
  directives: [
    SignupForm
  ]
})

export class SignupPage {
  code: string = require('!!raw!./signup.form.ts');
  template: string = require('./signup.form.html');
}
