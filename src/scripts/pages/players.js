import React, { Component } from 'react';
import TopBar from '../components/topbar';
import Icon from '../components/icon';

export default class Players extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="players" className="page">
                <TopBar title="玩家列表">
                    <Icon type="logo" className="pull-left" />
                </TopBar>
                <span>
                    This is Players;
                </span>
            </div>
        )
    }
}