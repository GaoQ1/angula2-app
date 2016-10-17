import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <button
     (click)="onSelect()"
     [class.selected] = "showDetail == true"
     >点击</button>
    <h1 *ngIf="showDetail">
      name: {{const.name}} <br>
      age: {{const.age}}
    </h1>
    <h3>{{const.name}} {{const.age}}</h3>
    <input [(ngModel)]="const.name" />
    `,
  styleUrls: ["../src/css/app.css"]
})

export class AppComponent{
  public const = {
    name: 'Co',
    age: 26
  }
  public showDetail = false;
  onSelect(){
    this.showDetail = true;
  }
}
