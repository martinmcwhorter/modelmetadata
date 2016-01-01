import Max from './Max';
import * as c from '../constants';

describe("@Max()", () => {

	it('should populate the property metadata', () => {
		
		class People {
		
			@Max(99)
			age: number;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(c.prefix + c.max, people, "age");
		expect(name).toBe(99);
	})
	
	it('should populate optional message', () => {
		
		class People {
		
			@Max(99, 'Too Old')
			age: number;	
		}
		let  people = new People()
		
		let name = Reflect.getMetadata(c.prefix + c.max, people, "age");
		expect(name).toBe(99);
		let message = Reflect.getMetadata(c.prefix + c.max + c.message, people, "age");
		expect(message).toBe('Too Old');
	})
	
})