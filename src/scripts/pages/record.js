import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Icon from '../components/icon';

export default class Record extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div id="record" className="page">
                <TopBar title="分成明细">
                    <Icon type="logo" className="pull-left" />
                </TopBar>
                <span>
                    This is Record;
                </span>
            </div>
        )
    }
}