import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from './contacts/newcontact.component';

@Component({
  selector: 'my-app',
  template: `
    <header>
      <nav>
        <a [routerLink]="['Contacts']">Contacts</a>
        <a [routerLink]="['NewContact']">NewContact</a>
      </nav>
    </header>
    <div class="main">
      <router-outlet></router-outlet>
    </div>
    `,
  directives: [ContactListComponent, ROUTER_DIRECTIVES],
  styleUrls: ["../src/css/app.css"]
})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent}
])

export class AppComponent{

}
