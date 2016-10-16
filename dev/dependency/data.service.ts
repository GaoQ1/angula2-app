export class DataService {
    private _data = ['Milk', 'Bread', 'Sugar'];

    getRandomItem() {
        return this._data[Math.floor(Math.random() * this._data.length)];
    }

    addItem(item: string) {
        this._data.forEach(element => {
            if(element === item) {
                return false;
            }
        });
        this._data.push(item);
    }
}