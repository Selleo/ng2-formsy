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
  templates: string[] = [
    require('./markup.html'),
    require('./markup-custom.html'),
    require('./horizontal-label.html'),
    require('./horizontal-label-custom.html')
  ]
}
