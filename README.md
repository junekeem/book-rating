# Book Rating
This is a demo project from:
[Angular-workshop-online](https://github.com/angular-schule/2021-11-angular-workshop-online "angular-workshop-online")

## Day 1

### Life Cycle Hook
* `ngOnInit()`: Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties

### Template Syntax
|Name|Expression|Description|
|----|----------|-----------|
|Interpolation|{{ expression }}|Dynamically change values in HTML Template|
|Property Binding|[property]="expression"|Set values for properties of HTML elements or directives|
|Structural Directive|*ngIf="expression"|Change DOM Tree structure by adding or deleting elements|

### `ng-container`
In order to avoid the need to create extra div, `ng-container` directive can be used.

### `*ngFor` and `trackBy`
Using `*ngFor` with `trackBy` can improve usuability and performance. When object property is changed, object is destroyed and completely reinitialized. By tracking object property, DOM elements are kept and only the values are updated.

Live example: [Stackblitz Link](https://stackblitz.com/edit/angular-buch-ngfor-trackby "*ngFor mit trackBy")

### Model: Interface vs Class
Interface has advantages in processing data from a remote server:
* Unlike class, no need of re-instantiating multiple times
* Easy to turn into full class

## Day 2

### Template Syntax
|Name|Expression|Description|
|----|----------|-----------|
|Event Binding|(event)="handler($event)|Listen for events and HTML (native/custom)|

* `@output`: send data to the parent component
* Custom events with EventEmitter: EventEmitter.emit(data) emit an event, passing in message data

### Test

Unit-Test > Integrationtest > UI-Test > E2E-Test

Testphase:
1. Arrange (Test preparation): `beforeEach`
2. Act (Test execution)
3. Assert (Examination/Evaluation): `expect()`
    - Please do not use the same algorithm/business logic to compare the result, but use the concrete value

### Immutability
Immutable object: An object, whose state cannot be changed after its creation => Use copy of the object/array, not directly its values

* `Object Spread`: Shallow copy
```typescript
  const book = {title:'test', price: 25};
  const copiedBook = {...book, price: 15};
```

### Service and Dependency Injection
Injecting services results in making them visible to a component:
```typescript
@Component({ /* ... */ })
export class DashboardComponent {
  // ...
  constructor(private rs: BookRatingService) { }
  // ...
}
```
Parameter Properties: TypeScript provides a shortcut to create properties/fields from parameters declared in the constructor with an access modifier.

### Pipe
|Name|Expression|Description|
|----|----------|-----------|
|Pipe|expression \| myPipe \| anotherPipe|Transform the data|

