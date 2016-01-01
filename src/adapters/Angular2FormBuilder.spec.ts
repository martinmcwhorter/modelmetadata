import {Angular2FormBuilder} from './Angular2FormBuilder';
import {FormBuilder} from 'angular2/common';
import {Required} from '../decorators/index';

describe('Angular2FormBuilder', () => {
	
	var target: Angular2FormBuilder;
	var formBuilder: FormBuilder;
	
	beforeEach(() => {
		
		formBuilder = new FormBuilder();
		target = new Angular2FormBuilder(formBuilder);
	})
	
	describe('getForm()', () => {
		
		xit('should generate simple form for simple model', () => {
			
			class Person {
				@Required()
				name: string;
			}
			spyOn(formBuilder, 'group');
			
			let form = target.getForm(Person);
			
			let args = (<jasmine.Spy>formBuilder.group).argsForCall;
			
			expect(<jasmine.Spy>formBuilder.group).toHaveBeenCalledWith([]);
			
		})
		
	})
	
	
})