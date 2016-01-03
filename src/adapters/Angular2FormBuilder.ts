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
		var keys: (string|symbol)[] = Reflect.getMetadata(c.propertyKeys, this.modelInstance);
		var controlsConfig: {[key: string]: any} = {};
		
		keys.forEach(key => {
			
			this.key = key;
			this.rawValidators = [];
			
			this.required();
			this.pattern();
			this.maxLength();
			this.minLength();
			
			var validators = Validators.compose(this.rawValidators);
			
			controlsConfig[key] = [this.modelInstance[key], validators];
		})
		
		return this.formBuilder.group(controlsConfig);
		
		
	}
	
	private required() {
		var required = Reflect.getMetadata(c.required, this.modelInstance, this.key);
		if (required) this.rawValidators.push(Validators.required);
	}
	
	private pattern() {
		var pattern: RegExp = Reflect.getMetadata(c.pattern, this.modelInstance, this.key);
		if (pattern) this.rawValidators.push(
			
			(control: Control) => {
				
				if (!pattern.test(control.value)) {
					control.valid = false;
				}
			
			}); 
	}
	
	private maxLength() {
		var maxLength: number = Reflect.getMetadata(c.maxLength, this.modelInstance, this.key);
		if (maxLength) this.rawValidators.push(Validators.maxLength(maxLength)); 
	}
		
	private minLength() {
		var minLength: number = Reflect.getMetadata(c.minLength, this.modelInstance, this.key);
		if (minLength) this.rawValidators.push(Validators.maxLength(minLength)); 
	}
	
}