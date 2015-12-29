import 'reflect-metadata/Reflect';
import * as c from '../constants';

function required(message?: string) {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.required;
	
		Reflect.defineMetadata(name, true, target, propertyKey);

		if (message) {
			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
		}

		return;
	}
}

let Required = required;
export default Required;