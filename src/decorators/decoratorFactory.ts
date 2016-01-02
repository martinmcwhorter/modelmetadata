import * as c from '../constants';

export function decoratorFactory<T>(metadataKey: string, defaultValue?: any) {

	return (value?: T, message?: string): any  => {
	
		return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
		
			if (defaultValue) value = defaultValue;
		
			Reflect.defineMetadata(metadataKey, value, target, propertyKey);
	
			if (message) {
				Reflect.defineMetadata(metadataKey, message, target, propertyKey);
			}
			
			let propertyKeys: [string|symbol] = Reflect.getMetadata(c.propertyKeys, target) || [];
			if (propertyKeys.indexOf(propertyKey) === -1)  propertyKeys.push(propertyKey);
			Reflect.defineMetadata(c.propertyKeys, propertyKeys, target);
			
			return;
		}
	}
}