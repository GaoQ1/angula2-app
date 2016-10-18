import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  template: `
  <input [(ngModel)]="contact.name" type="text"/>
  <div>
    name: {{contact.name}} <br>
    age: {{contact.age}}
  </div>
  `,
  inputs: ['contact']
})

export class ContactComponent{
  public contact = {};
}
