import * as c from '../constants';

export class SimpleSchema {
	
    private key: string|symbol;
    private schema: {[key: string]: {[name: string]: any}};
	
    private schemaRecord: any;
    private modelInstance: any;
  
	getSchema(modelInstance: any) :any {
		
        this.modelInstance = modelInstance;
        
        var keys: (string|symbol)[] = Reflect.getMetadata(c.PROPERTY_KEYS, this.modelInstance);
        this.schema = {};
        
        keys.forEach(key => {
			
            this.schemaRecord = {}
            this.key = key;
            this.type();
            this.required();
            this.pattern();
            this.max();
            this.min();
            this.label();
            this.maxLength();
            this.minLength();
            this.defaultValue();
            this.enum();
            this.schema[key] = this.schemaRecord;
		})
		
		return this.schema;
	}
	
	private type() {
        var type = Reflect.getMetadata("design:type", this.modelInstance, this.key);
        var integer = Reflect.getMetadata(c.INTEGER, this.modelInstance, this.key);
        this.schemaRecord['type'] = type;
        if (type===Number && !integer) this.schemaRecord['decimal'] = true;
	}
	
    private required() {
        var required = Reflect.getMetadata(c.REQUIRED, this.modelInstance, this.key);
        if (!required) this.schemaRecord['optional'] = true;
    }
    
    private pattern() {
        var pattern: RegExp = Reflect.getMetadata(c.PATTERN, this.modelInstance, this.key);
        if (pattern) this.schemaRecord['regEx'] = pattern;  
    }
	
    private min() {
        var min: number = Reflect.getMetadata(c.MIN, this.modelInstance, this.key);
        if (min || min===0) this.schemaRecord['min'] = min;
        
    }
  
    private max() {
        var max: number = Reflect.getMetadata(c.MAX, this.modelInstance, this.key);
        if (max || max===0) this.schemaRecord['max'] = max;
    }
  
    private label() {
        var label: string = Reflect.getMetadata(c.LABEL, this.modelInstance, this.key);
        if (label) this.schemaRecord['label'] = label;
    }
  
    private maxLength() {
        var maxLength: number = Reflect.getMetadata(c.MAX_LENGTH, this.modelInstance, this.key);
        if (maxLength || maxLength===0) this.schemaRecord['max'] = maxLength; 
    }
		
	private minLength() {
        var minLength: number = Reflect.getMetadata(c.MIN_LENGTH, this.modelInstance, this.key);
        if (minLength || minLength===0) this.schemaRecord['min'] = minLength;
	}
    
    private defaultValue() {
        var defaultValue: any = Reflect.getMetadata(c.DEFAULT, this.modelInstance, this.key);
        if (defaultValue) this.schemaRecord['defaultValue'] = defaultValue;
    }
  
    private enum() {
        var enum_: Array<any> = Reflect.getMetadata(c.ENUM, this.modelInstance, this.key);
        if (enum_) this.schemaRecord['allowedValues'] = enum_;
    }	
}