import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
  selector: 'contact',
  template: `
  <input [(ngModel)]="contact.name" type="text"/>
  <div>
    name: {{contact.name}} <br>
    age: {{contact.age}}
  </div>
  <button (click)="onCreateNew()">create new Contact from this contact</button>
  `,
  inputs: ['contact']
})

export class ContactComponent{
  public contact: Contact = null;

  constructor(private _router:Router){

  }

  onCreateNew(){
    this._router.navigate(['NewContact',{name: this.contact.name}]);
  }
}
