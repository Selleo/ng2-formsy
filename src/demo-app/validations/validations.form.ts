import {Component, Injectable, provide} from '@angular/core';
import {Validators, ControlGroup, FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FormsyMessages, FORMSY_BS_DIRECTIVES} from 'ng2-formsy';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {Observable} from 'rxjs/observable';

@Injectable()
class TranslateFormsyMessages extends FormsyMessages {
  constructor(private translate: TranslateService) {
    super();
  }

  get(key: string, interpolateParams: any): Observable<string> {
    return this.translate.get(`validations.${key}`, interpolateParams);
  }
}

@Component({
  selector: 'validations-form',
  template: require('./validations.form.html'),
  directives: [
    FORMSY_BS_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  providers: [
    provide(FormsyMessages, {useClass: TranslateFormsyMessages})
  ]
})
export class ValidationsForm {
  form: ControlGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[A-Za-z]+')
      ])]
    });
  }

  onSubmit() {
    // submit
  }
}
