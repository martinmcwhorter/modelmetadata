import * as c from '../constants';

function pattern(pattern: RegExp, message?: string): any {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.pattern;
	
		Reflect.defineMetadata(name, pattern, target, propertyKey);

		if (message) {
			Reflect.defineMetadata(name + c.message, message, target, propertyKey);
		}

		return;
	}
}

let Pattern = pattern;
export default Pattern;
