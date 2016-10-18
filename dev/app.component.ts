import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactListComponent} from './contacts/contact-list.component';

import {DemoComponent} from './demo';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav>
        <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['NewContact']">NewContact</a>
      </nav>
    </header>
    <contact-list></contact-list>
    <demo></demo>
    `,
  directives: [ContactListComponent, ROUTER_DIRECTIVES],
  styleUrls: ["../src/css/app.css"]
})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: DemoComponent},
  {path: '/newcontacts', name: 'NewContact', component: DemoComponent}
])

export class AppComponent{

}
