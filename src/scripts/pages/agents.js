import React, { Component } from 'react';
import { Link } from 'react-router';
import TopBar from '../components/topbar';
import Scroll from '../components/scroll';
import { fetchUser } from '../stores/utils';


export default class Agents extends Component {
    constructor(props) {
        super(props);
        fetchUser();
    }

    render() {
        let id = 9999999;
        let agentNumber = 999;
        return (
            <div id="agents" className="page">
                <TopBar>
                    <i className="icon icon-head-logo pull-left" />
                    <div className="pull-right">
                        代理ID：{id}
                    </div>
                </TopBar>
                <Scroll className="agents-body">
                    <div className="g-head-body">
                        <ul className="flex flex--agents">
                            <li>
                                <div className="m-big-number text-center">
                                    <div className="number js-agents-number">{agentNumber}</div>
                                    <div className="title">直属代理数</div>
                                </div>
                            </li>
                            <li>
                                <Link className="m-plus text-center js-add-agent" to="/agents/create">
                                    <div className="title">新增代理</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Scroll>
            </div>
        )
    }
}