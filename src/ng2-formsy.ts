import {BsFormHorizontal} from './bs/bs-form-horizontal';
import {BsInputContainer} from './bs/bs-input-container';
import {BsMessages} from './bs/bs-messages';
import {ToggleControl} from './core/toggle-control';
export * from './core/formsy-messages';
export * from './core/formsy-validators';
import {FormsyMessages} from './core/formsy-messages';
import {FormsyValidators} from './core/formsy-validators';

export const FORMSY_BS_DIRECTIVES = [
  BsFormHorizontal,
  BsInputContainer,
  BsMessages,
  ToggleControl
];

export const FORMSY_PROVIDERS = [
  FormsyMessages,
  FormsyValidators
];
