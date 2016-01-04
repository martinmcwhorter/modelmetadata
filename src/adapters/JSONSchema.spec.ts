
import {JSONSchema} from './JSONSchema';
import {Required, MaxLength, Min, Max, Pattern, Label, Integer, Default, Enum, Description, Format} from '../decorators';

describe('JSONSchema', () => {
	
    var target: JSONSchema;
    var productSchema: any;
    var schema: any;
	
    beforeEach(() => {
		
    target = new JSONSchema();

          
    class Product  {
        
          @Required()
          @Description("The unique identifier for a product")
          @Integer()
          id: number;
          
          @Required()
          @Description("Name of the product")
          @MaxLength(100)
          name: string;
          
          @Required()
          @Min(0)
          price: number;
          
          tags: Array<string>;
                   
          @Label("State")
          @Default("Edited")
          state: string;
          
          @Enum(['red','green','blue','yellow'])
          color: string;
          
          constructor() {}
      }

      
      //from: https://github.com/aldeed/meteor-simple-schema
      productSchema  =  {
          "$schema": "http://json-schema.org/draft-04/schema#",
          "title": "Product",
          "description": "A product from Acme's catalog",
          "type": "object",
          "properties": {
              "id": {
                  "description": "The unique identifier for a product",
                  "type": "integer"
              },
              "name": {
                  "description": "Name of the product",
                  "maxLength": 100,
                  "type": "string"
              },
              "price": {
                  "type": "number",
                  "minimum": 0,
              },
              "tags": {
                  "type": "array"
              },
              "state": {
                "title": "State",
                "default": "Edited",
                "type": "string"
              },
              "color": {
                "type": "string",
                "enum": ['red','green','blue','yellow']
              }
          },
          "required": ["id", "name", "price"]
      }
    
        schema = target.getSchema(new Product()); 
    });
        
 	describe('getSchema()', () => {

        xit('should generate the correct schema', () => {    
            expect(schema).toEqual(productSchema);
		    })
        it('should generate the correct schema for "id"', () => {    
            expect(schema.id).toEqual(productSchema.id);
		    })
        it('should generate the correct schema for "name"', () => {    
            expect(schema.name).toEqual(productSchema.name);
		    })
        it('should generate the correct schema for "price"', () => {   
            expect(schema.price).toEqual(productSchema.price);
		    })
        it('should generate the correct schema for "tags"', () => {    
            expect(schema.tags).toEqual(productSchema.tags);
		    })
        it('should generate the correct schema for "state"', () => {    
            expect(schema.state).toEqual(productSchema.state);
		    })
        it('should generate the correct schema for "color"', () => {    
            expect(schema.color).toEqual(productSchema.color);
		    })
        
	})

}) 