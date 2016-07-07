import { ViewContainerRef, ComponentResolver, OnInit } from '@angular/core';
export declare class BasicFormMux implements OnInit {
    private componentResolver;
    template: string;
    contentTarget: ViewContainerRef;
    constructor(componentResolver: ComponentResolver);
    ngOnInit(): void;
    createContentComponent(template: string): any;
}
