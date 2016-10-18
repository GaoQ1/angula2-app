import {Component, OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact-service';
import {Contact} from './contact';

@Component({
  selector: 'contact-list',
  template: `
  <ul>
    <li *ngFor="#contact of contacts"
    (click)="onSelect(contact)"
    >
      {{contact.name}} {{contact.age}}
    </li>
  </ul>
  <contact [contact]="selectedContact"></contact>
  `,
  providers: [ContactService],
  directives: [ContactComponent],
  styles: [`
    li{
      list-style: none;
    }
    `]
})

export class ContactListComponent implements OnInit{
  public contacts: Contact[];
  public selectedContact = {};

  constructor(private _contactService: ContactService){}

  onSelect(contact){
    this.selectedContact = contact;
  }

  getContacts(){
    this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
  }

  ngOnInit():any{
    this.getContacts();
  }
}
