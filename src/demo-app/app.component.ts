import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './signup/signup.component';
import {LabelsComponent} from './labels/labels.component';
import {ToggleComponent} from './toggle/toggle.component';
import {TranslateService} from 'ng2-translate/ng2-translate';

require('../assets/bootstrap.scss');
require('./app.component.scss');

@Component({
  selector: 'demo-app',
  template: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/signup', name: 'Signup', component: SignupComponent},
  {path: '/labels', name: 'Labels', component: LabelsComponent},
  {path: '/toggle', name: 'Toggle', component: ToggleComponent},
])
export class AppComponent {
  constructor(translate: TranslateService) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(en|pl)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);
  }
}
