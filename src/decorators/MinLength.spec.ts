import {MinLength} from './decorators';
import * as c from '../constants';

describe("@MinLenth()", () => {

	let metadataKey = c.MIN_LENGTH;

	it('should populate the property metadata', () => {
		
		class People {
		
			@MinLength(3)
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toBe(3);
	})
	
	it('should populate optional message', () => {
		
		class People {
		
			@MinLength(3, 'Too Short')
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toBe(3);
		let message = Reflect.getMetadata(metadataKey + c.MESSAGE, people, "name");
		expect(message).toBe('Too Short');
	})
	
})