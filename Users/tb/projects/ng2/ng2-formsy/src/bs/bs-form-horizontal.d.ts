import { QueryList } from '@angular/core';
import { BsInputContainer } from './bs-input-container';
export declare class BsFormHorizontal {
    bsInputContainers: QueryList<BsInputContainer>;
    labelSize: string;
    ngAfterContentInit(): void;
}
