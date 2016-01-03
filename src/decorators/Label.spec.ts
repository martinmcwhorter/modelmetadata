import {Label} from './decorators';
import * as c from '../constants';

describe("@Label()", () => {
	
	class People {
		
		@Label("Name")
		name: string;	
	}
	
	var people = new People()

	it('should populate the property metadata', () => {
		
		let name = Reflect.getMetadata(c.LABEL, people, 'name');
		
		expect(name).toBe("Name");
	})
	
})