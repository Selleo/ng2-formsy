import { Control } from '@angular/common';
import { FormsyMessages } from '../core/formsy-messages';
import { Observable } from 'rxjs/observable';
export declare class BsMessages {
    private _formsyMessages;
    control: Control;
    constructor(_formsyMessages: FormsyMessages);
    messages: Observable<string>[];
}
