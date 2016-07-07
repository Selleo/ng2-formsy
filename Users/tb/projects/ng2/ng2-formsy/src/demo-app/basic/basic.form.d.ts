import { ControlGroup, FormBuilder } from '@angular/common';
export declare class BasicForm {
    form: ControlGroup;
    constructor(formBuilder: FormBuilder);
    onSubmit(): void;
}
