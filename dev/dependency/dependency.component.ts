import {Component} from 'angular2/core';
import {Component2Component} from './component2.component'
import {Component1Component} from './component1.component'
import {DataService} from './data.service'

@Component({
    selector: 'dependency',
    template : `
        <section class="component">
            <component1></component1>
        </section>
        <section class="component">
            <component2></component2>
        </section>
    `,
    directives: [Component1Component, Component2Component],
    //providers: [DataService]
})

export class DependencyComponent {

}