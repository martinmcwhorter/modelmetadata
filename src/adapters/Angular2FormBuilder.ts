import {FormBuilder, Validators} from "angular2/common"

export class Angular2FormBuilder {
	
	constructor(private formBuilder: FormBuilder = new FormBuilder()) {}
	
	getForm(model: any) {
		
		var keys = Object.getOwnPropertyNames(model);
		var controlsConfig: {[key: string]: any} = {};
		
		keys.forEach(value => {
			
			var required = Reflect.getMetadata('modelProperty:required', model, value)
			
			var rawValidators: Function[] = [];
			
			if (required) rawValidators.push(Validators.required);
			
			var validators = Validators.compose(rawValidators);
			
			controlsConfig[value] = [model[value], validators];
		})
		
		return this.formBuilder.group(controlsConfig);
	}
}