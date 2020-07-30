var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = {
            date: new Date()
        };
        return _this;
    }

    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({
                date: new Date()
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h2',
                    null,
                    'It is ',
                    this.state.date.toLocaleTimeString()
                )
            );
        }
    }]);

    return Clock;
}(React.Component);

function tick() {
    ReactDOM.render(React.createElement(Clock, null), document.getElementById('clock'));
}

setInterval(tick, 1000);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function formatName(user) {
    return user.firstName + '-' + user.lastName;
}
function getGreeting(user) {
    if (user) {
        return React.createElement(
            'h1',
            null,
            '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ',
            formatName(user),
            '! ',
            React.createElement('img', { src: user.avatar })
        );
    }
    return React.createElement(
        'h1',
        null,
        '\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0435\u0446. ',
        React.createElement('img', { src: user.avatar })
    );
}

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Footer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.lexa = {
            firstName: 'Крипто',
            lastName: 'Лёха',
            avatar: "https://cdn22.img.ria.ru/images/07e4/07/03/1573858467_0:0:3078:1732_600x0_80_0_0_7dd6d7c7a40198ef7df3b77b060811ec.jpg"
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'footer__wrap' },
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    null,
                    getGreeting(this.lexa)
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

ReactDOM.render(React.createElement(Footer, null), document.getElementById('footer'));
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "header__wrap" },
                React.createElement("hr", null),
                React.createElement(
                    "div",
                    null,
                    this.props.name,
                    " "
                ),
                React.createElement(Greeting, { isLoggedIn: true })
            );
        }
    }]);

    return Header;
}(React.Component);

ReactDOM.render(React.createElement(Header, { name: "\u041A\u041E\u0421\u041C\u041E\u0421" }), document.getElementById('header'));
function UserGreeting(props) {
    return React.createElement(
        "h1",
        null,
        "\u0421 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435\u043C!"
    );
}

function GuestGreeting(props) {
    return React.createElement(
        "h1",
        null,
        "\u0412\u043E\u0439\u0434\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430."
    );
}

function Greeting(props) {
    var isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return React.createElement(UserGreeting, null);
    }
    return React.createElement(GuestGreeting, null);
}
ReactDOM.render(React.createElement(
    'h1',
    null,
    '\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0438\u0440!'
), document.getElementById('hello_world'));
var numbers = [1, 2, 3, 4, 5];
var listItems = numbers.map(function (number) {
    return React.createElement(
        'li',
        null,
        number
    );
});
ReactDOM.render(React.createElement(
    'ul',
    null,
    listItems
), document.getElementById('list'));
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.state = { isToggleOn: true };

        // Эта привязка обязательна для работы `this` в колбэке.
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Toggle, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (state) {
                return {
                    isToggleOn: !state.isToggleOn
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.handleClick },
                this.state.isToggleOn ? 'Включено' : 'Выключено'
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('toggle'));
