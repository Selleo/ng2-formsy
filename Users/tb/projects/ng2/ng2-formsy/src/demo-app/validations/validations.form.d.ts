import { ControlGroup, FormBuilder } from '@angular/common';
export declare class ValidationsForm {
    form: ControlGroup;
    constructor(formBuilder: FormBuilder);
    onSubmit(): void;
}
