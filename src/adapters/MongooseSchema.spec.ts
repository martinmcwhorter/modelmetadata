import {MongooseSchema} from './MongooseSchema';
import {Required, MaxLength, MinLength, Min, Max, Pattern} from '../decorators'

describe('MongooseSchema', () => {
    
    describe('getSchema()', () => {
        
        class Person {
            
            @Required()
            @MaxLength(15, 'Too Long')
            firstName: string;

            @MinLength(3, 'Too Short')
            lastName: string;
            
            @Min(18, 'Too Young')
            age: number;
            
            @Max(4, 'Too Many')
            dependants: number;
            
            @Pattern(/^\d+$/, 'Doesn\'t match')
            phone: string;
        }
        
        let person = new Person();
        var target = new MongooseSchema().getSchema(person);
        
        //it('should ')
        
    })
    
    
    
});