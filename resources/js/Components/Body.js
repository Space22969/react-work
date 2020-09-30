import React from 'react';
import interact from 'interactjs';
import {observer} from 'mobx-react';
import AppStore from './Stores/AppStore';
import ColumnFactory from '../Factories/ColumnFactory';
import CardsFactory from '../Factories/CardsFactory';

@observer
class Body extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout(() => {
            this.initColumns();
        }, 5000)
    }

    initColumns() {
        let columns = AppStore.columns;
        columns.map((column) => {
            this.initColumn(column);
            this.initCards(column.getCards());
        });
    }

    initCards(cards) {
        cards.map((card) => {
            this.initCard(card)
        });
    }

    initColumn(column) {
        interact(column.ref.current)
            .dropzone({
                ondrop: function (event) {
                    alert(event.relatedTarget.id
                        + ' was dropped into '
                        + event.target.id)
                }
            })
            .on('dropactivate', function (event) {
                event.target.classList.add('drop-activated')
            })
    }

    initCard(card) {
        let position = { x: 0, y: 0 }
        interact(card.ref.current).draggable({
            listeners: {
                start (event) {
                    console.log(event.type, event.target)
                },
                move (event) {
                    position.x += event.dx
                    position.y += event.dy

                    event.target.style.transform =
                        `translate(${position.x}px, ${position.y}px)`
                },
            }
        })
    }

    showCard(card) {
        // console.log(card.ref.current)
        // console.log(card.id + '   ' + card.getTitle() + '   ' + card.getText());
    }

    constructColumn(columnObject) {
        columnObject.ref = React.createRef();
        return <div ref={columnObject.ref} key={columnObject.id} style={{border: '1px solid black', width: '200px', height: '100%', marginRight: '10px'}}>
            <div className={'title'}>{columnObject.title}</div>
            {
                columnObject.cards.map((card) => {
                    return this.constructCard(card);
                })
            }
            <div><button style={{marginTop: '10px'}} onClick={(event) => {CardsFactory.createEmptyInStore(columnObject)}}>Добавить карточку</button></div>

        </div>
    }

    constructCard(card) {
        card.ref = React.createRef();

        return <div ref={card.ref} onClick={(event) => {this.showCard(card)}} key={'card_' + card.id} style={{border: '1px solid black', marginTop: '10px'}} className={'card'}>
            {card.getTitle()}
        </div>
    }

    constructEmptyColumn() {
        return <div style={{border: '1px solid black', width: '100px', height: '100%', marginRight: '10px'}}>
            <button style={{marginTop: '10px'}} onClick={ColumnFactory.createEmptyInStore}>Добавить столбец</button>
        </div>;
    }

    render() {
        let columns = AppStore.columns;
        return <div style={{marginTop: '5px', marginBottom: '5px', border: '1px solid black', width: '1000px', height: '1000px', display: 'flex'}}>
            {columns.map((column) => {
                return this.constructColumn(column);
            })}
            { this.constructEmptyColumn()}
        </div>
    }
}

export default Body;