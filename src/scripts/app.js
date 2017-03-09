import React, { Component } from 'react';
import classNames from 'classnames';
import url from 'url';
import { Router, Route, Link } from 'react-router';
import NavBar from './components/navbar';
import NavBarItem from './components/navbaritem';
import Icon from './components/icon';


class App extends Component {
    constructor(props) {
        super(props);
    }

    getMenuData() {
        return [
            {
                path: '/',
                label: '代理',
                icon: 'icon-person',
            }, {
                path: '/record',
                label: '分成',
                icon: 'icon-search-list'
            }, {
                path: '/players',
                label: '玩家',
                icon: 'icon-person-list'
            }, {
                path: '/prefenerces',
                label: '设置',
                icon: 'icon-setting'
            }
        ]
    }

    menuItem(item, index) {
        let {path, label, icon} = item;
        return (
            <NavBarItem key={path} order={index}>
                <Link to={path}>
                    { icon && <i className={classNames('icon', icon)}></i> }
                    <span>
                        {label}
                    </span>
                </Link>
            </NavBarItem>
        )
    }

    render() {
        let { children } = this.props;
        let menus = this.getMenuData();
        const uri = url.parse(location.href);

        return (
            <div>
                <NavBar classPrefix="navbar" defaultActiveIndex={this.props.children.props.route.index}>
                    { menus.map((item, index) => this.menuItem(item, index)) }
                </NavBar>
                <div>
                { children }
                </div>
            </div>
        )
    }
}

export default App;