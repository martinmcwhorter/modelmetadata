import * as c from '../constants';

function maxLength(length: number, message?: string): any {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.maxLength;
	
		Reflect.defineMetadata(name, length, target, propertyKey);

		if (message) {
			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
		}

		return;
	}
}

export let MaxLength = maxLength;
