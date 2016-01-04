# Model Metadata
Define model metadata using ES7 / TypeScript Decorators

The aim of this project is to provide model metadata decorators to 
mark up plain old ECMAScript classes with, as well as adapters to
turn that metadata into something usesful. The posibilities are endless.

The project currecnly has adapters for:
* Angular2 FormBuilder
* JSONSchema
* SimpleScheme (Meteor)
* Mongoose

```ts
class Person {
	
	@Required()
	firstName: string;
	
	@Required()
	lastName: string;
}
```

```ts
var schema = mongooseSchemaAdapter.getSchema(new Person());
// schema = new Schema({
//		firstName: {type: String, min: 1},
//		lastName: {type: String, min: 1} 
//	});
	
var form = angular2FormBuilderAdapter.getForm(new Person());
// form = formBuilder.group({
//		firstName: ["", Validators.Required],
//		lastName: ["", Validators.Required]		
//	});
```

## Status

As of now this project is still in the early proof of concept stages.
That said - I will take pull request.