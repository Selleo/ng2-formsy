import {Component} from '@angular/core';
import {ValidationsForm} from './validations.form';

@Component({
  selector: 'basic-page',
  template: require('./validations.page.html'),
  directives: [
    ValidationsForm
  ]
})

export class ValidationsPage {
  code: string = require('!!raw!./validations.form.ts');
  template: string = require('./validations.form.html');
}
