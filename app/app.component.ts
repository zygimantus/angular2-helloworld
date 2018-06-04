import { Component } from 'angular2/core'

@Component( {
    selector: 'my-component',
    template: '<div><button (click)="sayMyName()">Do Something Special</button > </div>'
} )
export class MyComponent {
    public name: String;
    constructor() {
        this.name = 'Angular 2 Rocks !';
    }
    sayMyName() {
        alert( this.name );
    }
}