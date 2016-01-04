import {SimpleSchema} from './SimpleSchemaAdapter';
import {Required, MaxLength, Min, Max, Pattern, Label, Integer, Default, Enum, Description, Format} from '../decorators';

describe('SimpleSchema', () => {
	
	var target: SimpleSchema;
  var bookSchema: any;
  var schema: any;
	
	beforeEach(() => {
		
		target = new SimpleSchema();

          
      class Book  {
                  
          @Required()
          @MaxLength(200)
          @Label("Title")
          title: string;
          
          @Required()
          @Label("Author")
          author: string;
          
          @Required()
          @Integer()
          @Min(0)
          @Label("Number of copies")
          copies: number;
          
          @Label("Last date this book was checked out")
          lastCheckedOut: Date;
          
          @MaxLength(1000)
          @Label("Brief summary")
          summary: string;
          
          @Required()
          @Label("Price")
          price: number;
          
          @Label("State")
          @Default("Edited")
          state: string;
          
          @Label("Cover color")
          @Enum(['red','green','blue','yellow'])
          color: string;
          
          @Required()
          chapters: Array<any>;
      }
  
      
      //from: https://github.com/aldeed/meteor-simple-schema
      bookSchema  = {
        title: {
          type: String,
          label: "Title",
          max: 200
        },
        author: {
          type: String,
          label: "Author"
        },
        copies: {
          type: Number,
          label: "Number of copies",
          min: 0
        },
        lastCheckedOut: {
          type: Date,
          label: "Last date this book was checked out",
          optional: true
        },
        summary: {
          type: String,
          label: "Brief summary",
          optional: true,
          max: 1000
        },
        price: {
          type: Number,
          decimal: true,
          label: "Price"
        },
        state: {
          type: String,
          defaultValue: "Edited",
          label: "State",
          optional: true
        },
        color: {
          type: String,
          allowedValues: ['red','green','blue','yellow'],
          label: "Cover color",
          optional: true
        },
        chapters: {
          type: Array
        }
      }
    
        schema = target.getSchema(new Book());   

    });
        
 	describe('getSchema()', () => {

        xit('should generate the correct schema', () => {    
            expect(schema).toEqual(bookSchema);
		    })
        it('should generate the correct schema for "author"', () => {    
            expect(schema.author).toEqual(bookSchema.author);
		    })
        it('should generate the correct schema for "title"', () => {    
            expect(schema.title).toEqual(bookSchema.title);
		    })
        it('should generate the correct schema for "title.label"', () => {    
            expect(schema.title.label).toEqual(bookSchema.title.label);
		    })
        it('should generate the correct schema for "title.max"', () => {    
            expect(schema.title.max).toEqual(bookSchema.title.max);
		    })
        it('should generate the correct schema for "copies"', () => {   
            expect(schema.copies).toEqual(bookSchema.copies);
		    })
        it('should generate the correct schema for "lastCheckedOut"', () => {    
            expect(schema.lastCheckedOut).toEqual(bookSchema.lastCheckedOut);
		    })
        it('should generate the correct schema for "summary"', () => {    
            expect(schema.summary).toEqual(bookSchema.summary);
		    })
        it('should generate the correct schema for "price"', () => {    
            expect(schema.price).toEqual(bookSchema.price);
		    })
        it('should generate the correct schema for "state"', () => {    
            expect(schema.state).toEqual(bookSchema.state);
		    })
        it('should generate the correct schema for "color"', () => {    
            expect(schema.color).toEqual(bookSchema.color);
		    })
        it('should generate the correct schema for "chapters"', () => {    
            expect(schema.chapters).toEqual(bookSchema.chapters);
		    })
        
	})
	
	
})