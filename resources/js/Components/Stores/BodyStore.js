import {observable, action} from 'mobx';


class BodyStore {

    @observable columns = [1];

    constructor() {

    }

    @action.bound
    addColumn(column) {
        this.columns.push(column);
    }

    getColumns() {
        return this.columns;
    }
}

export default new BodyStore();