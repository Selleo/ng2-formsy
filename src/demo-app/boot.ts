import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ])
    .catch(err => console.error(err));
});
