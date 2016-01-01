import * as c from '../constants';

function label(label: string): any {
	
	let labelDecorator = (target: Object, propertyKey: string | symbol): PropertyDecorator => {
	
		let name = c.prefix + c.label;
	
		Reflect.defineMetadata(name, label, target, propertyKey);

		return;
	}
	
	return labelDecorator;
}

export let Label = label;