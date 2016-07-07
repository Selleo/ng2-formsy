import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {TRANSLATE_PROVIDERS} from 'ng2-translate/ng2-translate';
import {FORMSY_PROVIDERS} from 'ng2-formsy';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS,
    FORMSY_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ])
      .catch(err => console.error(err));
});
