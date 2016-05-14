import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from  './home/home.component';
import {MdButton} from '@angular2-material/button'
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'

require('../assets/bootstrap.scss');

@Component({
  selector: 'demo-app',
  template: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MD_SIDENAV_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true}
])
export class AppComponent {
}
