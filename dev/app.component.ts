import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ContactListComponent} from './contacts/contact-list.component';
import {NewContactComponent} from './contacts/newcontact.component';
import {HttpTestComponent} from './http-test.component';

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
      <http-test></http-test>
    </div>
    `,
  directives: [ContactListComponent, HttpTestComponent, ROUTER_DIRECTIVES],
  styleUrls: ["../src/css/app.css"]
})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent}
])

export class AppComponent{

}
