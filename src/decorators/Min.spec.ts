import {Min} from './decorators';
import * as c from '../constants';

describe("@Min()", () => {

	let metadataKey = c.MIN;

	it('should populate the property metadata', () => {
		
		class People {
		
			@Min(17)
			age: number;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "age");
		expect(name).toBe(17);
	})
	
	it('should populate optional message', () => {
		
		class People {
		
			@Min(17, 'Too Young')
			age: number;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "age");
		expect(name).toBe(17);
		let message = Reflect.getMetadata(metadataKey + c.MESSAGE, people, "age");
		expect(message).toBe('Too Young');
	})
	
})