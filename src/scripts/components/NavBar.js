import React, { Component } from 'react';
import classNames from 'classnames';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('NavBar');
        let { children, className } = this.props;
        let classname = classNames('navbar', className);
        return (
            <div className={classname}>
                {children}
            </div>
        )
    }
}