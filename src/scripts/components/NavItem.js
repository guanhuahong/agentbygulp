import React, { Component } from 'react';
import classNames from 'classnames';

export default class NavItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { children, active, className } = this.props;
        let classname = classNames({
            'navbar-item': true,
            'active': active
        }, className);
        return (
            <div className={classname}>
                {children}
            </div>
        )
    }
}