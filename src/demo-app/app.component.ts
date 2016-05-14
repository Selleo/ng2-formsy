import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from  './home/home.component';
import {LoginComponent} from  './login/login.component';
import {LabelsComponent} from  './labels/labels.component';
import {MdButton} from '@angular2-material/button'
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav'
import {MD_LIST_DIRECTIVES} from '@angular2-material/list'
import {MdButton, MdAnchor} from '@angular2-material/button'
import {MdIcon} from '@angular2-material/icon'
import {MdToolbar} from '@angular2-material/toolbar'

require('../assets/bootstrap.scss');
require('./app.component.scss');

@Component({
  selector: 'demo-app',
  template: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton,
    MdToolbar,
    MdAnchor,
    MdIcon
  ]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/login', name: 'Login', component: LoginComponent},
  {path: '/labels', name: 'Labels', component: LabelsComponent},
])
export class AppComponent {
}
