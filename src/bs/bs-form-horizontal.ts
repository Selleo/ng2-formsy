import {ContentChildren, Directive, Input, QueryList} from '@angular/core';
import {BsInputContainer} from './bs-input-container';

@Directive({
  selector: '[bs-form-horizontal]',
  host: {
    '[class.form-horizontal]': 'true',
    '[class.col-xs-12]': 'true'
  }
})
export class BsFormHorizontal {
  @ContentChildren(BsInputContainer) bsInputContainers: QueryList<BsInputContainer>;
  @Input('label-size') labelSize: string = 'col-xs-2';

  ngAfterContentInit() {
    if (this.bsInputContainers) {
      this.bsInputContainers.forEach((bsInputContainer) => {
        bsInputContainer.labelSize = this.labelSize;
      })
    }
  }
}