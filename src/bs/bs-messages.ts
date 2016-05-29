import {Component} from '@angular/core';
import {Control} from '@angular/common';
import {FormsyMessages} from '../core/formsy-messages';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'bs-messages',
  template: `
    <div *ngIf="control && control.errors && control.touched">
      <div class="help-block" *ngFor="let message of messages">{{ message | async }}</div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
  directives: [],
  pipes: []
})
export class BsMessages {
  control: Control;

  constructor(private _formsyMessages: FormsyMessages) {}

  get messages(): Observable<string>[] {
    let keys: string[] = Object.keys(this.control.errors);
    return keys
      .map((key: string) => {
        let value = this.control.errors[key];
        return this._formsyMessages.get(key, value);
      });
  }
}
