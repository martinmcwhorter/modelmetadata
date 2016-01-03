import {MaxLength} from './decorators';
import * as c from '../constants';

describe("@MaxLength()", () => {
	
	let metadataKey = c.maxLength;

	it('should populate the property metadata', () => {
		
		class People {
		
			@MaxLength(25)
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toBe(25);
	})
	
	it('should populate optional message', () => {
		
		class People {
		
			@MaxLength(25, 'Too Long')
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toBe(25);
		let message = Reflect.getMetadata(metadataKey + c.message, people, "name");
		expect(message).toBe('Too Long');
	})
	
})