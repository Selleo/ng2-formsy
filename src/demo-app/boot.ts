import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MdIconRegistry} from '@angular2-material/icon';

document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MdIconRegistry,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ])
      .catch(err => console.error(err));
});
