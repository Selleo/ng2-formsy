import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {IntroductionPage} from './introduction/introduction.page';
import {BasicPage} from './basic/basic.page';
import {SignupPage} from './signup/signup.page';
import {TranslateService} from 'ng2-translate/ng2-translate';

require('./app.component.scss');

@Component({
  selector: 'demo-app',
  template: require('./app.component.html'),
  directives: [
    ROUTER_DIRECTIVES
  ]
})
@RouteConfig([
  {path: '/', name: 'Introduction', component: IntroductionPage, useAsDefault: true},
  {path: '/basic', name: 'Basic', component: BasicPage},
  {path: '/signup', name: 'Signup', component: SignupPage},
])
export class AppComponent {
  constructor(translate: TranslateService) {
    let userLang = navigator.language.split('-')[0];
    userLang = /(en|pl)/gi.test(userLang) ? userLang : 'en';
    translate.setDefaultLang('en');
    translate.use(userLang);
  }
}
