import {Component, Input, ContentChild} from '@angular/core';
import {Control, NgControl} from '@angular/common';
import {BsMessages} from "./bs-messages";

@Component({
  selector: 'bs-input-container',
  template: `
    <div class="form-group" [ngClass]="{'has-error': control.errors && control.touched}">
      <ng-content></ng-content>
		</div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class BsInputContainer {
  @ContentChild(NgControl) control: Control;
  @ContentChild(BsMessages) bsMessages: BsMessages;

  ngAfterContentInit() {
    if (this.bsMessages && !this.bsMessages.control) {
      this.bsMessages.control = this.control;
    }
  }
}