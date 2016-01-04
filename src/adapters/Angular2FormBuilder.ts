import {isPresent} from 'angular2/src/facade/lang';
import {FormBuilder, Control, ControlGroup} from 'angular2/common';
import {Injectable} from 'angular2/core';
import * as c from '../constants';
import {Validators, validatorConfig} from './angular2/';

@Injectable()
export class Angular2FormBuilder {
	
	private modelInstance: any;
	private rawValidators: Function[];
	private key: string|symbol;
	
	constructor(
        private formBuilder: FormBuilder, 
        private validatorCollection: validatorConfig) {}
	
	getForm(instance: any): ControlGroup {
		
        this.modelInstance = instance;
		var keys: (string|symbol)[] = Reflect.getMetadata(c.PROPERTY_KEYS, this.modelInstance);
		var controlsConfig: {[key: string]: any} = {};
		
		keys.forEach(key => {
			
			this.key = key;
			this.rawValidators = [];
            
            this.iterateOverValidators();
			
			var validators = Validators.compose(this.rawValidators);
			
			controlsConfig[key] = [this.modelInstance[key], validators];
		})
		
		return this.formBuilder.group(controlsConfig);
	}
    
    private iterateOverValidators() {
        
        this.validatorCollection
            .forEach(v => this.applyValidators(v.key, v.validator))
    }
    
    private applyValidators(metadataKey: string, validator: (value: any) => Function) {
        var value = Reflect.getMetadata(metadataKey, this.modelInstance, this.key);
        if (value !== undefined) this.rawValidators.push(validator(value));
    }
}