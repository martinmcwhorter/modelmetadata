import * as c from '../constants';

export function decoratorFactory(metadataKey: string, defaultValue?: any) {

	return (...args: any[]): any  => {
		
		let message: string;
		let value: any;
		
		if (defaultValue !== undefined) {
			value = defaultValue;
			message = args[0] || undefined;
		} else {
			value = args[0];
			message = args[1] || undefined;
		}
	
		return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
		
			Reflect.defineMetadata(metadataKey, value, target, propertyKey);
	
			if (message) {
				Reflect.defineMetadata(metadataKey + c.MESSAGE, message, target, propertyKey);
			}
			
			let propertyKeys: [string|symbol] = Reflect.getMetadata(c.PROPERTY_KEYS, target) || [];
			if (propertyKeys.indexOf(propertyKey) === -1)  propertyKeys.push(propertyKey);
			Reflect.defineMetadata(c.PROPERTY_KEYS, propertyKeys, target);
			
			return;
		}
	}
}