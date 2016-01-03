import {isPresent} from 'angular2/src/facade/lang';
import {FormBuilder, Validators,Control} from "angular2/common";
import {Injectable} from 'angular2/core';
import * as c from '../constants';


@Injectable()
export class Angular2FormBuilder {
	
	private modelInstance: any;
	private rawValidators: Function[];
	private key: string|symbol;
	
	constructor(private formBuilder: FormBuilder) {}
	
	getForm(instance: any) {
		
        this.modelInstance = instance;
		var keys: (string|symbol)[] = Reflect.getMetadata(c.PROPERTY_KEYS, this.modelInstance);
		var controlsConfig: {[key: string]: any} = {};
		
		keys.forEach(key => {
			
			this.key = key;
			this.rawValidators = [];
			
			this.required();
			this.pattern();
			this.maxLength();
			this.minLength();
            this.min();
			
			var validators = Validators.compose(this.rawValidators);
			
			controlsConfig[key] = [this.modelInstance[key], validators];
		})
		
		return this.formBuilder.group(controlsConfig);
		
		
	}
	
	private required() {
		var required = Reflect.getMetadata(c.REQUIRED, this.modelInstance, this.key);
		if (required) this.rawValidators.push(Validators.required);
	}
	
	private pattern() {
		var pattern: RegExp = Reflect.getMetadata(c.PATTERN, this.modelInstance, this.key);
		if (pattern) this.rawValidators.push(
			
			(control: Control) => {
				
				if (!pattern.test(control.value)) {
					control.valid = false;
				}
			
			}); 
	}
	
	private maxLength() {
		var maxLength: number = Reflect.getMetadata(c.MAX_LENGTH, this.modelInstance, this.key);
		if (maxLength) this.rawValidators.push(Validators.maxLength(maxLength)); 
	}
		
	private minLength() {
		var minLength: number = Reflect.getMetadata(c.MIN_LENGTH, this.modelInstance, this.key);
		if (minLength) this.rawValidators.push(Validators.maxLength(minLength)); 
	}
	
    private min() {
        var min: number = Reflect.getMetadata(c.MIN, this.modelInstance, this.key);
        if (min) this.rawValidators.push(
            
            (control: Control): {[key: string]: any} => {
                if (isPresent(Validators.required(control))) return null;
                var v: number = control.value;
                return v < min ?
                    {"min": {"requiredCount": min, "actualCount": v}} :
                    null;
            })
   
    }
}