import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ContactService} from './contact-service';
import {Contact} from './contact';

@Component({
  selector: 'new-contact-component',
  template: `
    <form #myForm="ngForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" ngControl="name" [(ngModel)]="newContact.name" required/>
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="text" id="age" ngControl="age" [(ngModel)]="newContact.age" required/>
      </div>
      <button type="submit" [disabled]="!myForm.valid">Confim</button>
    </form>
  `,
  providers: [ContactService],
  styles: [
    `
      .ng-invalid{
        border: 1px solid red;
      }
    `
  ]
})

export class NewContactComponent implements OnInit {
  newContact: Contact;

  constructor(
    private _contactService: ContactService,
    private _router: Router,
    private _routeParams: RouteParams){}

  onSubmit(){
    this._contactService.insertContact(this.newContact);
    this._router.navigate(['Contacts']);
  }

  ngOnInit():any{
    this.newContact = {
      name: this._routeParams.get('name'),
      age: ''
    }
  }
}
