import {Validators as BaseValidators, Control} from 'angular2/common';
import {isPresent} from 'angular2/src/facade/lang';

export class Validators extends BaseValidators {
    
    /**
     * Validator that requires controls to have a value of a minimum number.
     */
    static min(min: number): Function {
        return (control: Control): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;
            var v: number = control.value;
            return v < min ?
                {"min": {"requiredNumber": min, "actualNumber": v}} :
                null;
        }
    }
    
    /**
     * Validator that requires controls to have a value of a maximum number.
     */
    static max(max: number): Function {
        return (control: Control): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;
            var v: number = control.value;
            return v > max ?
                {"max": {"requireNumber": max, "actualNumber": v}} :
                null;
        }
    }
    
    /**
     * Validator that requires controls to have a value that matches pattern.
     */    
    static pattern(pattern: RegExp): Function {
        return (control: Control): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;
            var v: any = control.value;
            return !pattern.test(v) ?
                {"pattern": true} :
                null;
        }
    }
   
}