import * as c from '../constants';

function decoratorFactory<T>(metadataKey: string, param: boolean, message = false) {

	return (value?: T, message?: string): any  => {
	
		return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
		
			Reflect.defineMetadata(metadataKey, length, target, propertyKey);
	
			if (message) {
				Reflect.defineMetadata(metadataKey, message, target, propertyKey);
			}
			
			let propertyKeys: [string|symbol] = Reflect.getMetadata(c.propertyKeys, target) || [];
			propertyKeys.push(propertyKey);
	
			return;
		}
	}
}