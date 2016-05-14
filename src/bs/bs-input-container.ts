import {Component, Input, ContentChild} from '@angular/core';
import {Control, NgControl} from '@angular/common';

@Component({
  selector: 'bs-input-container',
  template: `
    <div class="form-group" [ngClass]="{'has-error': control.errors && control.touched}">
      <ng-content></ng-content>
			<div class="help-block" *ngIf="control.errors && control.touched">
				{{control.errors | json}}
			</div>
		</div>
  `,
  styles: [],
  providers: [],
  directives: [],
  pipes: []
})
export class BsInputContainer {
  @ContentChild(NgControl) control: Control;
}