import {Component} from 'angular2/core';

@Component({
    selector: 'pipes',
    template : `
        <h1>Pipe Examples</h1>
        <div class="pipes">
                <h2>Date Pipe</h2>
                <div>
                    {{date | date:'fullDate'}}
                </div>
                <h2>Number Pipe</h2>
                <div>
                    {{4.51315456 | number:'1.2-2'}}
                </div>
                <h2>Currency Pipe</h2>
                <div>
                    {{4.51315456 | currency:'EUR':true:'1.2-2'}}
                </div>
                <h2>Stateful Pipe</h2>
                <div>
                    {{radomData | async}}
                </div>
            <div>
    `,
})

export class PipesComponent {
    date = new Date();
    radomData = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Random data!'), 2000);
    });
}