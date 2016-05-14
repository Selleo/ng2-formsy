import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from  './home/home.component';
import {LoginComponent} from  './login/login.component';
import {LabelComponent} from  './label/label.component';
import {MdButton} from '@angular2-material/button'
import {MdIcon} from '@angular2-material/icon'
import {MdToolbar} from '@angular2-material/toolbar'
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'

require('../assets/bootstrap.scss');

@Component({
  selector: 'demo-app',
  template: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MdIcon
  ]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/login', name: 'Login', component: LoginComponent},
  {path: '/label', name: 'Label', component: LabelComponent},
])
export class AppComponent {
}
