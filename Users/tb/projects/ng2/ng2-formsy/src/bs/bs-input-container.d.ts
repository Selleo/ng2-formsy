import { Control } from '@angular/common';
import { BsMessages } from "./bs-messages";
export declare class BsInputContainer {
    label: string;
    labelSize: string;
    control: Control;
    bsMessages: BsMessages;
    horizontal: boolean;
    ngAfterContentInit(): void;
    contentSize: string;
}
