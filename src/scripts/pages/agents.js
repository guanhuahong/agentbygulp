import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Icon from '../components/icon';

export default class Agents extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        console.log('agents');
        return (
            <div id="agents" className="page">
                <TopBar title="代理列表">
                    <Icon type="logo" className="pull-left" />
                </TopBar>
                <span>
                    This is Agents;
                </span>
            </div>
        )
    }
}