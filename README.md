# [angularattack2016-formsy](http://formsy.2016.angularattack.io/)

## Install

    npm i --save ng2-formsy

## Usage

    import {FORMSY_BS_DIRECTIVES} from 'ng2-formsy';
    
## Example

    <form [ngFormModel]="form" (ngSubmit)="onSubmit()" novalidate>
     <bs-input-container label="Name">
       <input ngControl="name" class="form-control">
       <bs-messages></bs-messages>
     </bs-input-container>
     <button type="submit" class="btn btn-default" [disabled]="!form.valid">Submit</button>
    </form>

## Development

    npm i
    npm start
    
### Deployment

    npm run start:dist
    npm run deploy

## License

ISC
