import {AbstractControl} from '@angular/common';

export interface ValidatorResult {
  [key: string]: boolean;
}

export class FormsyValidators {
  static emailAddress(control: AbstractControl): ValidatorResult {
    let emailAddressRegex: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return (!control.value || emailAddressRegex.test(control.value)) ? null : { invalidEmailAddress: true };
  }
}
