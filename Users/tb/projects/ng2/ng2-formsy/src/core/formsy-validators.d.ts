import { AbstractControl } from '@angular/common';
export interface ValidatorResult {
    [key: string]: boolean;
}
export declare class FormsyValidators {
    static emailAddress(control: AbstractControl): ValidatorResult;
}
