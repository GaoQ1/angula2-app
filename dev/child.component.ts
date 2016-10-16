import {Component, EventEmitter} from 'angular2/core';


@Component({
    selector: 'child',
    template :  `
         <h2>Child</h2>
         <p>Value entered in parent component: {{parentValue}}</p>
         <input type="text" #childInput (keyup)="onChange(childInput.value)" /><br />
    `,
    inputs: ['parentValue'], //default like inputs: ['parentValue:passedValue']
    outputs: ['childChanged'],
})

export class ChildComponent {
    parentValue: string;

    childChanged = new EventEmitter<string>();
    //@Output() childChanged = new EventEmitter<string>(); //or do this

    onChange(value) {
        this.childChanged.emit(value);
    }
}