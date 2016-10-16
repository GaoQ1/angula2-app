import {Component} from 'angular2/core';
import {JqueryComponent} from './jquery.component';

@Component({
    selector: 'jquery-app',
    template : `
        <jquery></jquery>
    `,
    directives: [JqueryComponent]
})

export class JqueryAppComponent {
    
}