import {Pattern} from './decorators';
import * as c from '../constants';

describe("@Pattern()", () => {

	let metadataKey = c.pattern;

	it('should populate the property metadata', () => {
		
		class People {
		
			@Pattern(/^[a-zA-Z].*$/)
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toEqual(/^[a-zA-Z].*$/);
	})
	
	it('should populate optional message', () => {
		
		class People {
		
			@Pattern(/^[a-zA-Z].*$/, "Doesn't Match")
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toEqual(/^[a-zA-Z].*$/);
		let message = Reflect.getMetadata(metadataKey + c.message, people, "name");
		expect(message).toBe("Doesn't Match");
	})
	
})