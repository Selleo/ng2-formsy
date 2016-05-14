import {Component, Input} from '@angular/core';
import {Control} from '@angular/common';

@Component({
  selector: 'bs-messages',
  template: `
    <div class="help-block" *ngIf="control && control.errors && control.touched">
      {{control.errors | json}}
    </div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class BsMessages {
  @Input('control') control: Control;
}