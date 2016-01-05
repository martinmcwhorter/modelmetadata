import {MongooseSchema} from './MongooseSchema';
import {
    Required, MaxLength, MinLength, Min, Max, Pattern
} from '../decorators';
import {model, Schema, Document} from 'mongoose';

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
        
        interface IPerson extends Person, Document { }
        
        let person = new Person();
        let schema = new MongooseSchema().getSchema(person);
        let modelSchema = new Schema(schema);
        let PersonModel = model<IPerson>('Person', modelSchema);
        let personModel = new PersonModel(person);
        
        let json = personModel.toJSON();
        
    })
    
    
    
});