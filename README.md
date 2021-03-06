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

<hr>

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

<hr>

## Day 3

### Tree Shakable Providers

By registering services to module in two-way, unused services can be detected and this can improve performance of an Angular application.

* Service <--- Module ( Recommended)
```typescript
  @Injectable({providedIn:'root'})
  export class TestService { }
```

* Service ---> Module
```typescript
  @NgModule({
    providers:[TestService],
    // ...
  })
  export class AppModule { }
```

### Shallow Component Test

* **schemas: [NO_ERRORS_SCHEMA]:** All child components are ignored

```typescript
await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA], // Shallow Component Test
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ]
```

### Change Detection Optimization

**Change Detection**: If any changes happen, Angular calculate all the bindings again, but only the changed element is newly rendered: For the safety, to check immutibility

* **ChangeDetectionStrategy.OnPush:** Execute change detection only if:
  * Event Binding ?????????????????????????????????
  * HTTP / WebSocket ???????????? Zone.js:
  * Timeout / Interval ??????????????? library from Angular, it triggers change detection
  * Promise ??????????????????????????????????????????
  * Manual changes / `@Input()` changes / `async`-Pipe...

```typescript
  @Component({
    selector: 'br-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush //
  })
  export class BookComponent implements OnInit {
```
<hr>

## Day 4

### Eager Loading / Lazy Loading

|Eager Loading|Lazy Loading|
|-------------|------------|
|By default, NgModules are eagerly loaded, which means that as soon as the application loads, so do all the NgModules, whether or not they are immediately necessary. |Lazy loading is a design pattern that loads NgModules as needed. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.|

app-routing.module.ts
```typescript
{
  path: 'books',
  loadChildren: () => import('./books/books.module') //dynamic import
                      .then(m => m.BooksModule)
}
```

### Reactive Forms: `ReactiveFormsModule`
* Form model in the component
* FormGroup, FormControl, FormArray
* One-Way and setValue() / patchValue()
* Binding inputs to form model
* Validators as part of the form model

<hr>
