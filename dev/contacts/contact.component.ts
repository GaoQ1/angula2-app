import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  template: `
  <input [(ngModel)]="contact.name" type="text"/>
  <div>
    name: {{contact.name}} <br>
    age: {{contact.age}}
  </div>
  <button (click)="createNew()">create new Contact from this contact</button>
  `,
  inputs: ['contact']
})

export class ContactComponent{
  public contact = {};
  createNew(){
    console.log('1');
  }
}
