import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

document.addEventListener('DOMContentLoaded', function main() {
  bootstrap(AppComponent, [])
    .catch(err => console.error(err));
});