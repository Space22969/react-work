import {observable, action, toJS} from 'mobx';
import Column from '../../Entities/Column';
import Card from '../../Entities/Card';
import ColumnFactory from '../../Factories/ColumnFactory';
import CardsFactory from '../../Factories/CardsFactory';

class AppStore {

    @observable columns = [
        {
            id: '497b395a-da1a-4291-927d-e0cf3a0e5911',
            title: 'Первый столбец',
            cards: []
        },
        {
            id: '33bc1a8d-4d0c-4aec-8ddc-923f257b2326',
            title: 'Второй столбец',
            cards: []
        },

    ];

    constructor() {
        this.columns = this.columns.map((column) => {
            return ColumnFactory.create(column.id, column.title, CardsFactory.createFromData(column.cards));
        });
    }

    @action.bound
    addColumn(column) {
        this.columns.push(column);
        return this;
    }

    /**
     *
     * @param {Column} column
     * @param {Card} card
     */
    @action.bound
    addCardToColumn(column, card) {
        console.log('New card: ',toJS(column))
        return column.addCard(card);
    }
}

export default new AppStore();