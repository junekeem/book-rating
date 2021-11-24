# Book Rating
This is a demo project from:
[Angular-workshop-online](https://github.com/angular-schule/2021-11-angular-workshop-online "angular-workshop-online")

## Day 1

### Life Cycle Hook
* `ngOnInit()`: Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties

### Data Binding
|Name|Expression|Description|
|----|----------|-----------|
|Text Interpolation|{{ expression }}|Dynamically change values in HTML Template|
|Property Binding|[property]="expression"|Set values for properties of HTML elements or directives|
|Structural Directive|*ngIf="expression"|Change DOM Tree structure by adding or deleting elements|

### `ng-container`
In order to avoid having to create extra div, `ng-container` directive can be used.

### `*ngFor` and `trackBy`
Using `*ngFor` with `trackBy` can improve usuability and performance. When object property is changed, object is destroyed and completely reinitialized. By tracking object property, DOM elements are kept and only the values are updated.

Live example: [Stackblitz Link](https://stackblitz.com/edit/angular-buch-ngfor-trackby "*ngFor mit trackBy")

### Model: Interface vs Class
Interface has advantages in processing data from a remote server:
* Unlike class, no need of re-instantiating multiple times
* Easy to turn into full class
