import 'reflect-metadata/Reflect';
import * as c from '../constants';

function label(label: string) {
	
	return  (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.label;
	
		Reflect.defineMetadata(name, label, target, propertyKey);

		return;
	}
}

let Label = label;
export default Label;