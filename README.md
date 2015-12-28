# Model Metadata
Define model metadata using TypeScript Decorators

The aim of this project is to provide model metadata decorators to 
mark up plain old JavaScript classes with as well as adapters to
turn that metadata into something usesful like an Angular2 `FormBuilder`
object or a `mongoose` schema. The posibilities are endless.

```ts
class Person {
	
	@Required()
	firstName: string;
	
	@Required()
	lastName: string;
}
```

```ts
var schema = mongooseSchemaAdapter.getSchema(Person);
// schema = new Schema({
//		firstName: {type: String, min: 1},
//		lastName: {type: String, min: 1} 
//	});
	
var form = angular2FormBuilderAdapter.getForm(Person);
// form = formBuilder.group({
//		firstName: ["", Validators.Required],
//		lastName: ["", Validators.Required]		
//	});
```

As of now this project is still in the early proof of concept stages.
That said - I will take pull request.