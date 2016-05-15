import {Component, Input, ContentChild} from '@angular/core';
import {Control, NgControl} from '@angular/common';
import {BsMessages} from "./bs-messages";

@Component({
  selector: 'bs-input-container',
  template: `
    <div class="form-group" [ngClass]="{'has-error': control.errors && control.touched}">
      <ng-content *ngIf="!label" select="label,div"></ng-content>
      <div [class.row]="!horizontal" *ngIf="!!label">
        <label class="control-label {{labelSize}}">{{ label }}</label>
        <div class="{{contentSize}}">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class BsInputContainer {
  @Input('label') label: string;
  @Input('label-size') labelSize: string = 'col-xs-12';
  @ContentChild(NgControl) control: Control;
  @ContentChild(BsMessages) bsMessages: BsMessages;
  horizontal: boolean = false;

  ngAfterContentInit() {
    if (this.bsMessages && !this.bsMessages.control) {
      this.bsMessages.control = this.control;
    }
  }

  get contentSize() {
    return this.labelSize.split(/\s/).map((labelSize) => {
      let match = labelSize.match(/^(.*-)(\d+)$/);
      let prefix = match[1];
      let size = parseInt(match[2]);
      if (!size) {
        return labelSize;
      } else {
        return size == 12 ? `${prefix}${size}` : `${prefix}${12 - size}`;
      }
    }).join(' ');
  }
}
