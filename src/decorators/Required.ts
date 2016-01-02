import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

// export function required(message?: string): any {
// 	
// 	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
// 	
// 		let name = c.prefix + c.required;
// 	
// 		Reflect.defineMetadata(name, true, target, propertyKey);
// 
// 		if (message) {
// 			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
// 		}
// 
// 		return;
// 	}
// }
// 
// export var Required = required;

export let Required: (message: string) => any = decoratorFactory(c.required, true); 