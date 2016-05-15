import {Component} from '@angular/core';
import {BasicFormMux} from './basic.form.mux'

@Component({
  selector: 'basic-page',
  template: require('./basic.page.html'),
  directives: [
    BasicFormMux
  ]
})

export class BasicPage {
  codeTs: string = require('!!raw!./basic.form.ts');
  
  templates = [
    {markup: require('./markup.html'), title: 'Markup'},
    {markup: require('./markup-custom.html'), title: 'Markup custom'},
    {markup: require('./horizontal-label.html'), title: 'Horizontal label'},
    {markup: require('./horizontal-label-custom.html'), title: 'Horizontal label custom'}
  ]
}
