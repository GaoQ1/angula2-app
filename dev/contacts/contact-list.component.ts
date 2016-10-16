import { Component, OnInit } from 'angular2/core';
import {ContactComponent} from './contact.component';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector: 'contact-list',
    templateUrl: '../../templates/contact-list.html',
    styleUrls: ["../src/css/contact-list.css"],
    directives: [ContactComponent],
    providers: [ContactService],
})

export class ContactListComponent implements OnInit {
    public contacts: Contact[];
    public selectedContact = null;

    constructor(private _contactService: ContactService) {}

    onSelect(contact) {
        this.selectedContact = contact;
    }

    getContacts() {
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
    }

    ngOnInit():any {
        this.getContacts();
    }
}