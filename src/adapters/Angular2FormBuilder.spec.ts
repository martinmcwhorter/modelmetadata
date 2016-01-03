import {Angular2FormBuilder} from './Angular2FormBuilder';
import {FormBuilder, Validators, ControlGroup, Control} from 'angular2/common';
import {Required, MaxLength, Min, Max, Pattern} from '../decorators/index';

describe('Angular2FormBuilder', () => {
	
	var target: Angular2FormBuilder;
	var formBuilder: FormBuilder;
	
	beforeEach(() => {
		
		formBuilder = new FormBuilder();
		target = new Angular2FormBuilder(formBuilder);
	})
	
	describe('getForm()', () => {
			
        class Person {
            
            @Required()
            @MaxLength(15)
            firstName: string;
            
            @Required()
            @MaxLength(15)
            lastName: string;
            
            @Min(18)
            age: number;
        }
		
        let person: Person;
        let form: ControlGroup;
        let firstName: Control;
        let lastName: Control;
        let age: Control;
        
        beforeEach(() => {
            person = new Person();
            
            person.firstName = 'Fred';
            person.lastName = "Flintstone";
            person.age = 37;
			form = target.getForm(person);
        
            firstName = <Control>form.controls['firstName'];
            lastName = <Control>form.controls['lastName'];
            age = <Control>form.controls['age'];
        });
        
        it('should apply the correct values to fields', () => {    
            expect(firstName.value).toBe('Fred');
            expect(lastName.value).toBe('Flintstone');
            expect(age.value).toBe(37);
		})
        
        it('should apply the Required validators to fields', () => {
            
            expect(firstName.valid).toBe(true);
            expect(lastName.valid).toBe(true);
            expect(age.valid).toBe(true);
            
            firstName.updateValue("");
            lastName.updateValue("")
            
            expect(firstName.valid).toBe(false);
            expect(lastName.valid).toBe(false);
            expect(age.valid).toBe(true);
        })
        
        it('should apply the MaxLength validator to fields', () => {
            
            expect(firstName.valid).toBe(true);
            expect(lastName.valid).toBe(true);
            expect(age.valid).toBe(true);
            
            firstName.updateValue("1234567890123456");
            lastName.updateValue("1234567890123456")
            
            expect(firstName.valid).toBe(false);
            expect(lastName.valid).toBe(false);
            expect(age.valid).toBe(true);
        })
        
        it('should apply the Min validator to fields', () => {
            
            expect(firstName.valid).toBe(true);
            expect(lastName.valid).toBe(true);
            expect(age.valid).toBe(true);
            
            age.updateValue(17);
            
            expect(firstName.valid).toBe(true);
            expect(lastName.valid).toBe(true);
            expect(age.valid).toBe(false);
        })
        
	})
	
	
})