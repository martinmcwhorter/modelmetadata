/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
import 'reflect-metadata/Reflect';
import * as c from '../constants';

function required(target: Object, propertyKey: string | symbol): PropertyDecorator {
	
	Reflect.defineMetadata(c.prefix + c.required, true, target, propertyKey);

	return;
}

export function Required(message?: string) {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.required;
	
		Reflect.defineMetadata(name, true, target, propertyKey);

		if (message) {
			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
		}

		return;
	}
}