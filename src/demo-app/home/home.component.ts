import {Component} from '@angular/core';
import {MdButton} from '@angular2-material/button'

@Component({
  selector: 'home',
  template: require('./home.component.html'),
  directives: [
    MdButton
  ]
})

export class HomeComponent {}
