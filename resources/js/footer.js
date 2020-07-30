function formatName(user) {
    return user.firstName + '-' + user.lastName
}
function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}! <img src={user.avatar}/></h1>;
    }
    return <h1>Здравствуй, незнакомец. <img src={user.avatar}/></h1>;
}

class Footer extends React.Component {

    lexa = {
        firstName: 'Крипто',
        lastName: 'Лёха',
        avatar: "https://cdn22.img.ria.ru/images/07e4/07/03/1573858467_0:0:3078:1732_600x0_80_0_0_7dd6d7c7a40198ef7df3b77b060811ec.jpg"
    }

    render() {
        return <div className="footer__wrap">
            <hr/>
            <div>{ getGreeting(this.lexa) }</div>
        </div>

    }
}

ReactDOM.render(
    <Footer />,
    document.getElementById('footer')
);