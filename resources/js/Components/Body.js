import React from 'react';
import interact from 'interactjs';
import {observer} from 'mobx-react';
import BodyStore from './Stores/BodyStore';

export default class Body extends React.Component {

    constructor(props) {
        super(props);
        this.sliderRef = React.createRef();
    }

    componentDidMount() {
        this.initSliders();
    }

    initSliders() {
        this.slider = interact('.slider')    // target elements with the "slider" class
        this.slider
        // Step 2
            .draggable({                        // make the element fire drag events
                origin: 'self',                   // (0, 0) will be the element's top-left
                inertia: true,                    // start inertial movement if thrown
                modifiers: [
                    interact.modifiers.restrict({
                        restriction: 'self'           // keep the drag coords within the element
                    })
                ],
                // Step 3
                listeners: {
                    move (event) {                  // call this listener on every dragmove
                        const sliderWidth = interact.getElementRect(event.target).width
                        const value = event.pageX / sliderWidth

                        event.target.style.paddingLeft = (value * 100) + '%'
                        event.target.setAttribute('data-value', value.toFixed(2))
                    }
                }
            })
    }

    render() {

        let columns = BodyStore.getColumns();

        return <div style={{marginTop: '5px', marginBottom: '5px', border: '1px solid black', width: '1000px', height: '1000px'}}>
            {columns.map((column) => {
                return <div style={{border: '1px solid black', width: '100px', height: '100%'}}>
                    {column}
                </div>
            })}
        </div>
    }
}