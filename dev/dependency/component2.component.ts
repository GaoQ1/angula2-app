import {Component} from 'angular2/core';
import {DataService} from './data.service';

@Component({
    selector: 'component2',
    template: `
        <h1>Component 2</h1>
        <button (click)="onGetItem()">Get Item from List</button> 
        <p> Random Item: {{item}} </p>
        <input type="text" #newItem /> 
        <button (click)="onAddItem(newItem.value)">Add</button>  
    `,
    providers: [DataService] 
})

export class Component2Component {
    private item: string;

    constructor(private _dataService: DataService) {}

    onGetItem() {
        this.item = this._dataService.getRandomItem();
    }

    onAddItem(item: string) {
        this._dataService.addItem(item);
    }
}