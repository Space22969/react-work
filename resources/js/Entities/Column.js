import {observable} from 'mobx';

export default class Column {
    @observable id = null;
    @observable title = '';
    @observable cards = [];

    constructor() {

    }

    setId(id) {
        this.id = id;
    }

    setTitle(title) {
        this.title = title;
    }

    setCards(cards) {
        this.cards = cards;
    }

    getCards() {
        return this.cards;
    }

    addCard(card) {
        this.cards.push(card);
        return this;
    }

    deleteCard(card) {
        delete this.cards[card.id];
    }
}