import React, { Component, PropTypes } from 'react';

class Example extends Component {
    static propsTypes = {
        // 参数类型限定
    };

    static defaultProps = {
        // 默认的参数 
    };

    constructor(porps) {
        super(porps)
        // TODO something
        this.state = {
            // 组件默认状态
        }
    }
    /**
     * 挂载DOM前
     * @return {[type]} [description]
     */
    componentWillMount() {
        
    }
    /**
     * 挂载DOM之后
     * @return {[type]} [description]
     */
    componentDidMount() {
        
    }
    /**
     * 如果组件是由于父组件更新props而更新的，那么在shouldComponentUpdate之前执行此方法。
     * 此方法可以作为React在props传入后，渲染前setState的机会，在此方法中调用setState是不会二次渲染
     * @param  {[type]} nextProps [description]
     * @return {[type]}           [description]
     */
    // componentWillReceiveProps(nextProps) {
    //  // this.setState({})
    // }

    /**
     * 接受需要更新的props和state，增加判断是否需要更新，
     * 当方法返回false时，组件不再向下执行生命周期
     * React默认返回true
     * @param  {[type]} nextProps [description]
     * @param  {[type]} nextState [description]
     * @return {[type]}           [description]
     */
    // shouldComponentUpdate(nextProps, nextState) {
    //  // return true;
    // }
    /**
     * 更新过程中渲染之前，提供需更新的props和state，
     * 不能调用setState方法
     * @param  {[type]} nextProps [description]
     * @param  {[type]} nextState [description]
     * @return {[type]}           [description]
     */
    // componentWillUpdate(nextProps, nextState) {}

    /**
     * 更新过程中渲染之后，提供更新前的props和state
     * @param  {[type]} prevProps [description]
     * @param  {[type]} prevState [description]
     * @return {[type]}           [description]
     */
    // componentDidUpdate(prevProps, prevState) {}
}