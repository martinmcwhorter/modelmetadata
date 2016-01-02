import {FormBuilder, Validators,Control} from "angular2/common";
import {Injectable} from 'angular2/core';
import * as c from '../constants';


@Injectable()
export class Angular2FormBuilder {
	
	private Model: any;
	private rawValidators: Function[];
	private key: string|symbol;
	
	constructor(private formBuilder: FormBuilder) {}
	
	getForm(Model: any) {
		
		this.Model = Model;
		var modelInstance = new Model();
		var keys: (string|symbol)[] = Reflect.getMetadata(c.propertyKeys, modelInstance);
		var controlsConfig: {[key: string]: any} = {};
		
		keys.forEach(key => {
			
			this.key = key;
			this.rawValidators = [];
			
			this.required();
			this.pattern();
			this.maxLength();
			this.minLength();
			
			var validators = Validators.compose(this.rawValidators);
			
			controlsConfig[key] = [Model[key], validators];
		})
		
		return this.formBuilder.group(controlsConfig);
		
		
	}
	
	private required() {
		var required = Reflect.getMetadata(c.prefix + c.required, this.Model, this.key);
		if (required) this.rawValidators.push(Validators.required);
	}
	
	private pattern() {
		var pattern: RegExp = Reflect.getMetadata(c.prefix + c.pattern, this.Model, this.key);
		if (pattern) this.rawValidators.push(
			
			(control: Control) => {
				
				if (!pattern.test(control.value)) {
					control.valid = false;
				}
			
			}); 
	}
	
	private maxLength() {
		var maxLength: number = Reflect.getMetadata(c.prefix + c.maxLength, this.Model, this.key);
		if (maxLength) this.rawValidators.push(Validators.maxLength(maxLength)); 
	}
		
	private minLength() {
		var minLength: number = Reflect.getMetadata(c.prefix + c.minLength, this.Model, this.key);
		if (minLength) this.rawValidators.push(Validators.maxLength(minLength)); 
	}
	
}