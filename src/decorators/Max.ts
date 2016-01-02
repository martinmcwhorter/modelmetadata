import * as c from '../constants';
import {decoratorFactory} from './decoratorFactory';

// function max(length: number, message?: string): any {
// 	
// 	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
// 	
// 		let name = c.prefix + c.max;
// 	
// 		Reflect.defineMetadata(name, length, target, propertyKey);
// 
// 		if (message) {
// 			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
// 		}
// 
// 		return;
// 	}
// }
// 
// let Max = max;
// export default Max;

export let Max: (length: number, message?: string) => any = decoratorFactory<number>(c.max);