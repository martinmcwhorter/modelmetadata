import * as c from '../constants';

export class MongooseSchema {
	
	private Model: any;
	private key: string;
	private schema: {[key: string]: {[name: string]: any}};
	
	private get schemaRecord() {
		return this.schema[this.key];
	}
	
	getSchema(Model: any) {
		
		this.Model = Model;
		var modelInstance = new Model();
		var keys = Object.keys(modelInstance);
		this.schema = {};
		
		keys.forEach(key => {
			
			this.key = key;
			
			this.required();
			this.pattern();
			this.maxLength();
			this.minLength();
		})
		
		return this.schema;
	}
	
	private type() {
		var type = Reflect.getMetadata("design:type", this.Model, this.key);
		this.schemaRecord['type'] = type;
	}
	
	private required() {
		var required = Reflect.getMetadata(c.prefix + c.required, this.Model, this.key);
		if (required) this.schemaRecord['min'] = 1;
	}
	
	private pattern() {
		var pattern: RegExp = Reflect.getMetadata(c.prefix + c.pattern, this.Model, this.key);
		if (pattern) this.schemaRecord['validate'] = { validator: (value: any) => pattern.test(value) }
		
		var message: string = Reflect.getMetadata(c.prefix + c.pattern + c.message, this.Model, this.key);
		if (message) this.schemaRecord['validate']['message'] = message; 
	}
	
	private maxLength() {
		var maxLength: number = Reflect.getMetadata(c.prefix + c.maxLength, this.Model, this.key);
		if (maxLength) this.schemaRecord['maxlength'] = maxLength; 
		
		var message: string = Reflect.getMetadata(c.prefix + c.maxLength + c.message, this.Model, this.key);
		if (message) this.schemaRecord['validate']['message'] = message; 
	}
		
	private minLength() {
		var minLength: number = Reflect.getMetadata(c.prefix + c.minLength, this.Model, this.key);
		if (minLength) this.schemaRecord['minlength'] = minLength;
		
		var message: string = Reflect.getMetadata(c.prefix + c.minLength + c.message, this.Model, this.key);
		if (message) this.schemaRecord['validate']['message'] = message; 
	}
	
}