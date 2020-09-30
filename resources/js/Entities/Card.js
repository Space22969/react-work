import {observable} from 'mobx';


export default class Card {
    @observable id = null;
    @observable title = '';
    @observable text = '';

    constructor() {

    }

    setId(id) {
        this.id = id;
    }

    setTitle(title) {
        this.title = title;
    }

    setText(text) {
        this.text = text;
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }
}