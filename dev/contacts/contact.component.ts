import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';

@Component({
    selector: 'contact',
    templateUrl: '../../templates/contact.html',
    inputs: ["contact"]
})

export class ContactComponent {
    public contact: Contact = null;

    constructor(private _router: Router) {}

    createFromContact() {
        this._router.navigate(['NewContact', {lastname: this.contact.lastname}])
    }

    createFromContactBuilder() {
        this._router.navigate(['NewContactFormbuilder', {lastname: this.contact.lastname}])
    }
}