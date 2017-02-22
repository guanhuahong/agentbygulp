import React, { Component } from 'react';
import classNames from 'classnames';

export default class Icon extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let { type } = this.props;
        let styles = classNames('icon', 'icon-' + type)
        return (
            <i className={styles} />
        )
    }
}