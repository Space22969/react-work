import Card from '../Entities/Card';
import AppStore from '../Components/Stores/AppStore';
import {v4 as uuidv4} from "uuid";
import {toJS} from 'mobx';

class CardsFactory {

    createEmptyInStore(column) {
        let newCard = new Card();
        newCard.setId(uuidv4());
        newCard.setTitle('New card');
        newCard.setText('');
        AppStore.addCardToColumn(column, newCard);
    }

    create(id, title, text) {
        let card = new Card();
        card.setId(uuidv4());
        card.setTitle('New card');
        card.setText('');
        return card;
    }

    /**
     *
     * @param {array} data
     * @returns {Array}
     */
    createFromData(data) {
        let cards = [];
        data.map((card) => {
            cards.push(this.create(card.id, card.title, card.text))
        });
        return cards;
    }
}

export default new CardsFactory();