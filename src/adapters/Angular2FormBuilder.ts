import {FormBuilder, Validators} from "angular2/common";
import * as c from '../constants';

export class Angular2FormBuilder {
	
	constructor(private formBuilder: FormBuilder = new FormBuilder()) {}
	
	getForm(Model: any) {
		
		var modelInstance = new Model();
		var keys = Object.keys(modelInstance);
		var controlsConfig: {[key: string]: any} = {};
		
		keys.forEach(value => {
			
			var required = Reflect.getMetadata(c.prefix + c.required, Model, value)
			
			var rawValidators: Function[] = [];
			
			if (required) rawValidators.push(Validators.required);
			
			var validators = Validators.compose(rawValidators);
			
			controlsConfig[value] = [Model[value], validators];
		})
		
		return this.formBuilder.group(controlsConfig);
	}
}