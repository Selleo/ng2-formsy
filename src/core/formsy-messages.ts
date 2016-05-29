import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import * as Rx from 'rxjs'; // FIXME require('rxjs/add/observable/of')

function interpolate(string: string, params: any): string {
  return string.replace(/{{([a-zA-Z]+[\w-]*)}}/g, (match, key) => {
    return params.hasOwnProperty(key) ? params[key] : match;
  });
}

@Injectable()
export class FormsyMessages {
  messages: any = {
    "required": "Required",
    "minlength": "Minimum length {{requiredLength}}, actual length {{actualLength}}",
    "maxlength": "Maximum length {{requiredLength}}, actual length {{actualLength}}",
    "pattern": "Required pattern {{requiredPattern}}",
    "invalidEmailAddress": "Invalid email address"
  };

  get(key: string, interpolateParams: any): Observable<string> {
    return Rx.Observable.of(interpolate(this.messages[key] || key, interpolateParams));
  }
}
