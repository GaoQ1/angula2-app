import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector: 'new-contact',
    templateUrl: '../../templates/new-contact.html',
    providers: [ContactService]
})

export class NewContactComponent implements OnInit {
    newContact: Contact;

    constructor(
        private _contactService: ContactService, 
        private _router: Router,
        private _routeParams: RouteParams) {}

    onSubmit() {
        this._contactService.insertContact(this.newContact);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.newContact = {
            firstname: "",
            lastname: this._routeParams.get('lastname'),
            telefon: "",
            email: "",
        };
    }
}