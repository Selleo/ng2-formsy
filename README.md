# [ng2-formsy](http://tb.github.io/ng2-formsy/)

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

    git submodule add -b gh-pages git@github.com:tb/ng2-formsy.git dist
    npm run deploy

## License

ISC
