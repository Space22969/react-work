'use strict';

class Header extends React.Component {
    render() {
        return (
            <div className="header__wrap">
                <hr/>
                <div>{ this.props.name } </div>
                <Greeting isLoggedIn={true} />
            </div>
    );
    }
}

ReactDOM.render(
    <Header name="КОСМОС"/>,
    document.getElementById('header')
);