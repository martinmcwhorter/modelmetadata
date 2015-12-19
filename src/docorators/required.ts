/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts" />
import 'reflect-metadata/Reflect';

function Required(target: Object, propertyKey: string | symbol): PropertyDecorator {
	
	Reflect.defineMetadata("modelProperty:required", true, target, propertyKey);

	return;
}