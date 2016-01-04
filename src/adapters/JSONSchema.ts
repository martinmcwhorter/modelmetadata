import * as c from '../constants';

export class JSONSchema {

    private modelInstance: any;
    private key: string|symbol;
    private schema: { title: string, $schema: string, required: string[], properties: any, type: string }

    private schemaRecord: any;
    private requiredFields: (string|symbol)[] = [];

    getSchema(modelInstance: any): any {

        this.modelInstance = modelInstance;

        var keys: (string|symbol)[] = Reflect.getMetadata(c.PROPERTY_KEYS, this.modelInstance);
        this.schema = {
            title: "",
            $schema: "http://json-schema.org/draft-04/schema#",
            type: "object",
            properties: {},
            required: []
        };

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
            this.default();
            this.enum();
            this.format();
            this.description();
            this.schema.properties[key] = this.schemaRecord;
        })

        this.schema.required = <string[]>this.requiredFields;
        return this.schema;
    }

    private type() {

        let stringType: string;
        var type = Reflect.getMetadata("design:type", this.modelInstance, this.key);
        var integer = Reflect.getMetadata(c.INTEGER, this.modelInstance, this.key);
        switch (type) {
            case String:
                stringType = 'string';
                break;
            case Number:
                stringType = 'number';
                break;
            case Boolean:
                stringType = 'boolean';
                break;
            case Date:
                stringType = 'string';
                this.schemaRecord['format'] = "date-time";
                break;
            case Object:
                stringType = 'object';
                break;
            case Array:
                stringType = 'array';
                break;
            default:
                break;
        }

        this.schemaRecord['type'] = stringType;
        if (type === Number && integer) this.schemaRecord['type'] = 'integer';
    }

    private required() {
        var required = Reflect.getMetadata(c.REQUIRED, this.modelInstance, this.key);
        if (required) this.requiredFields.push(this.key);
    }

    private pattern() {
        var pattern: RegExp = Reflect.getMetadata(c.PATTERN, this.modelInstance, this.key);
        if (pattern) this.schemaRecord['pattern'] = pattern;
    }

    private min() {
        var min: number = Reflect.getMetadata(c.MIN, this.modelInstance, this.key);
        if (min || min === 0) this.schemaRecord['minimum'] = min;
    }

    private max() {
        var max: number = Reflect.getMetadata(c.MAX, this.modelInstance, this.key);
        if (max || max === 0) this.schemaRecord['maximum'] = max;
    }

    private label() {
        var label: string = Reflect.getMetadata(c.LABEL, this.modelInstance, this.key);
        if (label) this.schemaRecord['title'] = label;
    }

    private maxLength() {
        var maxLength: number = Reflect.getMetadata(c.MAX_LENGTH, this.modelInstance, this.key);
        if (maxLength || maxLength === 0) this.schemaRecord['maxLength'] = maxLength;
    }

    private minLength() {
        var minLength: number = Reflect.getMetadata(c.MIN_LENGTH, this.modelInstance, this.key);
        if (minLength || minLength === 0) this.schemaRecord['minLength'] = minLength;
    }

    private default() {
        var defaultValue: any = Reflect.getMetadata(c.DEFAULT, this.modelInstance, this.key);
        if (defaultValue) this.schemaRecord['default'] = defaultValue;
    }

    private enum() {
        var enum_: Array<any> = Reflect.getMetadata(c.ENUM, this.modelInstance, this.key);
        if (enum_) this.schemaRecord['enum'] = enum_;
    }

    private format() {
        var format: Array<any> = Reflect.getMetadata(c.FORMAT, this.modelInstance, this.key);
        if (format) this.schemaRecord['format'] = format;
    }

    private description() {
        var description: Array<any> = Reflect.getMetadata(c.DESCRIPTION, this.modelInstance, this.key);
        if (description) this.schemaRecord['description'] = description;
    }

}

  