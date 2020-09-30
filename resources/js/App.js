import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import AppStore from './Components/Stores/AppStore';

export default class App extends React.Component {

    render() {
        return <div>
            <Header />
            <Body />
            <Footer />
        </div>
    }
}