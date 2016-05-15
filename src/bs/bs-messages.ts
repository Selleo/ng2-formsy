import {Component, Input} from '@angular/core';
import {Control} from '@angular/common';
import {TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  selector: 'bs-messages',
  template: `
    <div *ngIf="control && control.errors && control.touched">
      <div class="help-block" *ngFor="let error of errors">
        {{ 'errors.'+error.key | translate:error.value }}
      </div>
    </div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: [TranslatePipe]
})
export class BsMessages {
  @Input('control') control: Control;

  get errors() {
    return Object.keys(this.control.errors).map((key) => {
      let value = this.control.errors[key];
      return {key, value};
    });
  }
}
