import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'parent-child',
    template : `
        <h1>Parent Child Component</h1>
        <div class="parent">
            <h2>Parent</h2>
            <p>Value entered in child component: {{childValue}}</p>
            <input type="text" #parentInput (keyup)="0" /> <br />
            <div class="child">
                <child [parentValue]="parentInput.value" (childChanged)="childValue = $event"></child>
            </div>
        </div>
    `,
    directives: [ChildComponent]
})

export class ParentChildComponent {
    childValue: string;
}