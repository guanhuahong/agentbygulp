import React, { Component } from 'react';
import Url from 'url';
import { Router, Route, Link } from 'react-router';
import NavBar from './components/NavBar';
import NavItem from './components/NavItem';
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
                icon: 'person',
            }, {
                path: '/record',
                label: '分成',
                icon: 'search-list'
            }, {
                path: '/players',
                label: '玩家',
                icon: 'person-list'
            }, {
                path: '/prefenerces',
                label: '设置',
                icon: 'setting'
            }
        ]
    }

    menuItem(item) {
        let {path, label, icon} = item;
        return (
            <NavItem active={true}>
                <Link to={path}>
                    <Icon type={icon}/>
                    <span>
                        {label}
                    </span>
                </Link>
            </NavItem>
        )
    }

    render() {
        let { children } = this.props;
        let menus = this.getMenuData();
        return (
            <div>
                <NavBar>
                    {
                        menus.map((item) => menuItem(item))
                    }
                </NavBar>
                <div>
                { children }
                </div>
            </div>
        )
    }
}

export default App;