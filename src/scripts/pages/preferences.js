import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Icon from '../components/icon';

export default class Preferences extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div id="preferences" className="page">
                <TopBar title="分成明细">
                    <Icon type="logo" className="pull-left" />
                </TopBar>
                <span>
                    This is Preferences;
                </span>
            </div>
        )
    }
}