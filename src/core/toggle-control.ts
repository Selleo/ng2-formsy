import {Directive, Input, Host, SkipSelf, OnInit, OnDestroy} from '@angular/core';
import {ControlContainer} from '@angular/common';

// see https://github.com/angular/angular/issues/7970
@Directive({
  selector: '[ngControl]'
})
export class ToggleControl implements OnInit, OnDestroy {
  @Input() ngControl: string;
  constructor(@Host() @SkipSelf() private _parent: ControlContainer) {}

  ngOnInit(): void {
    setTimeout(() => this.formDirective.form.include(this.ngControl));
  }

  ngOnDestroy(): void {
    this.formDirective.form.exclude(this.ngControl);
  }

  get formDirective(): any {
    return this._parent.formDirective;
  }
}