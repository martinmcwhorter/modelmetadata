import * as c from '../constants';

let schemaConfig: [{key: string; field: string}] = [
    {key: c.MAX, field: "max"},
    {key: c.MAX_LENGTH, field: "maxlength"},
    {key: c.MIN, field: "min"},
    {key: c.MIN_LENGTH, field: "minlength"},
]

export class MongooseSchema {
	
	private modelInstance: any;
	private key: string|symbol;
	private schema: {[key: string]: {[name: string]: any}};
	
	private get schemaRecord() {
		return this.schema[this.key];
	}
	
	getSchema(modelInsance: any) {
		
		this.modelInstance = modelInsance;
		var keys: (string|symbol)[] = Reflect.getMetadata(c.PROPERTY_KEYS, this.modelInstance);
		this.schema = {};
		
		keys.forEach(key => {
			
			this.key = key;
            this.schema[key] = {};
			
            this.type()
			this.required();
			this.pattern();
            this.iterateOverSchemaConfig();
		})
		
		return this.schema;
	}
	
	private type() {
		var type = Reflect.getMetadata("design:type", this.modelInstance, this.key);
		this.schemaRecord['type'] = type;
	}
	
	private required() {
		var required = Reflect.getMetadata(c.REQUIRED, this.modelInstance, this.key);
		if (required !== undefined) this.schemaRecord['min'] = 1;
	}
	
    private pattern() {
		var pattern: RegExp = Reflect.getMetadata(c.PATTERN, this.modelInstance, this.key);
		if (pattern !== undefined) this.schemaRecord['validate'] = { validator: (value: any) => pattern.test(value) }
		
		var message: string = Reflect.getMetadata(c.PATTERN + c.MESSAGE, this.modelInstance, this.key);
		if (message !== undefined) this.schemaRecord['validate']['message'] = message; 
	}
    
    private iterateOverSchemaConfig() {
        schemaConfig
            .forEach(config => this.applySchema(config.key, config.field))
    }
    
    private applySchema(metadataKey: string, field: string) {
		var value: RegExp = Reflect.getMetadata(metadataKey, this.modelInstance, this.key);
		if (value !== undefined) this.schemaRecord[field] = value;
		
		var message: string = Reflect.getMetadata(metadataKey + c.MESSAGE, this.modelInstance, this.key);
		if (message !== undefined) this.schemaRecord[field]['message'] = message;
    }
   
}