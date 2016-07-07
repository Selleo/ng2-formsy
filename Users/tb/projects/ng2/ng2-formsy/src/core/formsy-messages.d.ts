import { Observable } from 'rxjs/observable';
export declare class FormsyMessages {
    messages: any;
    get(key: string, interpolateParams: any): Observable<string>;
}
