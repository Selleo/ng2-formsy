import {Component} from '@angular/core';
import {BasicFormMux} from '../basic/basic.form.mux';

@Component({
  selector: 'introduction',
  template: require('./introduction.page.html'),
  directives: [
    BasicFormMux
  ]
})

export class IntroductionPage {
  template: string = require('../basic/markup.html');
}
