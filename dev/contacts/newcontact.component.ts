import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {ContactService} from './contact-service';
import {Contact} from './contact';

@Component({
  selector: 'new-contact-component',
  template: `
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm.value)">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name"
        ngControl="name"
        [(ngFormControl)]="myForm.controls['name']"
        #name="ngForm"
        required/>
        <span *ngIf="!name.valid">Not valid</span>
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="text" id="age" ngControl="age" [(ngFormControl)]="myForm.controls['age']" required/>
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
  myForm: ControlGroup;

  constructor(
    private _contactService: ContactService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _formBuilder: FormBuilder){}

  onSubmit(value){
    this._contactService.insertContact(value);
    this._router.navigate(['Contacts']);
  }

  ngOnInit():any{
    this.myForm = this._formBuilder.group({
      name: [this._routeParams.get('name'), Validators.required],
      age: ['',Validators.required]
    })
  }
}
