import * as c from '../constants';

export function required(message?: string): any {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.required;
	
		Reflect.defineMetadata(name, true, target, propertyKey);

		if (message) {
			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
		}

		return;
	}
}

export var Required = required;
