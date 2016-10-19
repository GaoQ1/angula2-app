import {Component} from 'angular2/core';
import {HttpTestService} from './http-test.service';

@Component({
  selector: 'http-test',
  template: `
    <button (click)="onTestGet()">Test Get Request</button>
    <p>OUtput: {{getData}}</p>
    <button (click)="onTestPost()">Test Post Request</button>
    <p>OUtput: {{postData}}</p>
    `,
    providers: [HttpTestService]
})

export class HttpTestComponent{
  getData: string;
  postData: string;

  constructor(private _httpService: HttpTestService){}

  onTestGet(){
    this._httpService.getCurrentTime().subscribe(
      data => this.getData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    )
  }

  onTestPost(){
    this._httpService.postJSON().subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    )
  }
}
