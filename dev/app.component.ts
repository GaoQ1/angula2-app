import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {HTTPTestComponent} from './http-test.component';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from './contacts/new-contact.component';
import {NewContactFormbuilderComponent} from './contacts/new-contact-formbuilder.component';
import {ParentChildComponent} from './parent-child.component';
import {PipesComponent} from './pipes.component';
import {DependencyComponent} from './dependency/dependency.component';
import {JqueryAppComponent} from './jquery/jquery-app.comopent';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar">
                <a [routerLink]="['Contacts']">Contacts</a>
                <a [routerLink]="['NewContact']">New Contacts</a>
                <a [routerLink]="['NewContactFormbuilder']">New Contacts with Formbuiler</a>
                <a [routerLink]="['ParentChild']">Parent Child</a>
                <a [routerLink]="['Pipes']">Pipes</a>
                <a [routerLink]="['Dependency']">Dependency</a>
                <a [routerLink]="['Jquery']">Jquery</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
            <!-- <http-test></http-test> -->
        </div>
    `,
    directives: [ContactListComponent, HTTPTestComponent, NewContactComponent, ParentChildComponent, PipesComponent, DependencyComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
    {path: '/newcontacts', name: 'NewContact', component: NewContactComponent},
    {path: '/newcontactsbuilder', name: 'NewContactFormbuilder', component: NewContactFormbuilderComponent},
    {path: '/parentchild', name: 'ParentChild', component: ParentChildComponent},  
    {path: '/pipes', name: 'Pipes', component: PipesComponent},  
    {path: '/dependency', name: 'Dependency', component: DependencyComponent},  
    {path: '/jquery', name: 'Jquery', component: JqueryAppComponent},  
])

export class AppComponent {
    
}