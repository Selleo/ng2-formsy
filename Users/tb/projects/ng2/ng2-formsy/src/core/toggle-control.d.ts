import { OnInit, OnDestroy } from '@angular/core';
import { ControlContainer } from '@angular/common';
export declare class ToggleControl implements OnInit, OnDestroy {
    private _parent;
    ngControl: string;
    constructor(_parent: ControlContainer);
    ngOnInit(): void;
    ngOnDestroy(): void;
    formDirective: any;
}
