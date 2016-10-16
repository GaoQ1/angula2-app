import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {ContactService} from './contact.service';
import {Contact} from './contact';

@Component({
    selector: 'new-contact-formbuilder',
    templateUrl: '../../templates/new-contact-formbuilder.html',
    providers: [ContactService]
})

export class NewContactFormbuilderComponent implements OnInit {
    myForm: ControlGroup;

    constructor(
        private _contactService: ContactService, 
        private _router: Router,
        private _routeParams: RouteParams,
        private _formBuilder: FormBuilder) {}

    onSubmit(value) {
        this._contactService.insertContact(value);
        this._router.navigate(['Contacts']);
    }

    ngOnInit():any {
        this.myForm = this._formBuilder.group({
            'firstname': ['', Validators.required],
            'lastname': [this._routeParams.get('lastname'), Validators.required],
            'telefon': ['', Validators.required],
            'email': ['', Validators.minLength(5)],
        });
    }
}