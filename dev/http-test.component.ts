import {Component} from 'angular2/core';

@Component({
  selector: 'http-test',
  template: `
    <button>Test Get Request</button>
    <p>OUtput: {{getData}}</p>
    <button></button>
    `
})

export class HttpTestComponent{

}
