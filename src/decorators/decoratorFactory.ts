import * as c from '../constants';

export function decoratorFactory<T>(metadataKey: string, defaultValue?: any) {

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
			
      /*if (metadataKey === 'modelProperty:min' && propertyKey === 'copiesx') {
        console.log(metadataKey, value, propertyKey);
        //console.log(Reflect.getMetadataKeys(target));
        console.log(Reflect.getMetadataKeys(target, propertyKey));
        console.log(Reflect.getOwnMetadataKeys(target, propertyKey));
        console.log(Reflect.getMetadata(metadataKey,target, propertyKey));
        console.log(target);
        
        var Book = target.constructor;
        var t = new Book();
        console.log('a', Book, 'b', target, t, 'c');
        
        console.log('xxxx',Reflect.getOwnMetadataKeys(t, propertyKey), 'zzzz');
        console.log('xxxx',Reflect.getMetadataKeys(t, propertyKey), 'zzzz');
        
      }*/
      
      
			return;
		}
	}
}