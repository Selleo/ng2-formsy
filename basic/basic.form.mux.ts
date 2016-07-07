import {Component, Input, ViewChild, ViewContainerRef, ComponentResolver, OnInit} from '@angular/core';
import {FORM_DIRECTIVES, FormBuilder} from '@angular/common';
import {FORMSY_BS_DIRECTIVES, FORMSY_PROVIDERS} from 'ng2-formsy';
import {BasicForm} from './basic.form';

@Component({
  selector: 'basic-form-mux',
  template: '<template #muxContent></template>',
})
export class BasicFormMux implements OnInit {
  @Input('template') template: string;
  @ViewChild('muxContent', {read: ViewContainerRef}) contentTarget: ViewContainerRef;
  constructor(private componentResolver: ComponentResolver) {}

  ngOnInit() {
    this.componentResolver.resolveComponent(this.createContentComponent(this.template))
      .then((factory: any) => this.contentTarget.createComponent(factory));
  }

  createContentComponent(template: string): any {
    @Component({
      template: template,
      directives: [
        FORMSY_BS_DIRECTIVES,
        FORM_DIRECTIVES
      ],
      providers: [
        FORMSY_PROVIDERS
      ]
    })
    class MuxContent extends BasicForm {
      constructor(formBuilder: FormBuilder) {
        super(formBuilder);
      }
    }
    return MuxContent;
  }
}
