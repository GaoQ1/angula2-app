import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.service';


@Component({
    selector: 'http-test',
    template :  `
        <br/><br/><br/>
        <button (click)="onTestGet()">Test GET Request</button><br/>
        <p>Output: {{getData}}</p>
        <button (click)="onTestPost()">Test POST Request</button>
        <p>Output: {{postData}}</p>
    `,
    providers: [HTTPTestService] 
})

export class HTTPTestComponent {
    getData: string;
    postData: any;

    constructor (private _httpService: HTTPTestService) {}

    onTestGet() {
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => console.log(error),
                () => console.log("done")
            );
    }

    onTestPost() {        
        this._httpService.postJson()
            .subscribe(
                data => this.postData = data,
                error => console.log(error),
                () => console.log("done")
            );
    }
}