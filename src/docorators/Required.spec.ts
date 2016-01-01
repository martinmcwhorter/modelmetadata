import Required from './Required';
import * as c from '../constants';

describe("@Required()", () => {

	let metadataKey = c.prefix + c.required;

	it('should populate the property metadata', () => {
		
		class People {
		
			@Required()
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toBe(true);
	})
	
	it('should populate optional message', () => {
		
		class People {
		
			@Required("Required")
			name: string;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(metadataKey, people, "name");
		expect(name).toBe(true)
		let message = Reflect.getMetadata(metadataKey + c.message, people, "name");
		expect(message).toBe("Required");
	})
	
})