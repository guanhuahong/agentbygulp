import React, { Component } from 'react';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let {children, title} = this.props;
        return (
            <div className="topbar">
                {children}
                {title && (
                    <span>
                        {title}
                    </span>
                )}
            </div>
        )
    }
}