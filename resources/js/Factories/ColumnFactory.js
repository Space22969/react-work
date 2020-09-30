import Column from '../Entities/Column';
import AppStore from '../Components/Stores/AppStore';
import {v4 as uuidv4} from "uuid";
import {toJS} from 'mobx';

class ColumnFactory {

    createEmptyInStore() {
        let newColumn = new Column();
        newColumn.setId(uuidv4());
        newColumn.setTitle('New column');
        newColumn.setCards([]);
        AppStore.addColumn(newColumn);
        console.log('New empty column: ',toJS(newColumn))

    }

    create(id, title, cards) {
        let column = new Column();
        column.setId(id);
        column.setTitle(title);
        column.setCards(cards);
        console.log('New column: ',toJS(column))
        return column;
    }
}

export default new ColumnFactory();