# Model Metadata
Define model metadata using ES7 / TypeScript Decorators

```ts
class Person {
	
	@Required()
    @MaxLength(25)
	firstName: string;
	
	@Required()
    @Pattern(/^[a-z]+$/)
	lastName: string;
}
```

The aim of this project is to provide model metadata decorators to 
mark up plain old ECMAScript classes with, as well as adapters to
turn that metadata into something usesful. Decorated models can then
be used dynamically render and validate forms. The posibilities are endless.

The project currecnly currently has addapters to generate from metadata the following:
* Angular2 FormBuilder
* JSONSchema
* SimpleScheme (Meteor)
* MongooseSchma

We hope to have more adapters soon:
* react-forms? (or a better suggestion)
* ExtJs

As well as the generators from metadata, we plan to have metadata providers. 
While decorating a model class is the prescribed way to decorate a model, you 
may want to decorate or create a model from:
* JSONSchema
* MongooseSchema
* XSD 

## Status

As of now this project is still in the early proof of concept stages.
That said - I will take pull request.