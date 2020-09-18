import {observable} from 'mobx';


class BodyStore {

    @observable columns = [];

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