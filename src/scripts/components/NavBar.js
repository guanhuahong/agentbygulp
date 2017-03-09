import React, { Component } from 'react';
import classNames from 'classnames';

export default class NavBar extends Component {
    static defaultProps = {
        classPrefix: 'navbar',
        onChange: () => {},
    }

    constructor(props) {
        super(props);

        const currProps = this.props;
        let activeIndex;
        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            prevIndex: activeIndex,
            activeIndex
        };
    }

    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex,
            })
        }
    }

    handleNavClick(activeIndex, e) {
        e.preventDefault();

        let prevIndex = this.state.activeIndex;
        if (activeIndex !== prevIndex) {
            this.setState({
                prevIndex,
                activeIndex
            });
            this.props.onChange({activeIndex, prevIndex});
        }
    }
    getChildren() {
        const { classPrefix, children } = this.props;

        const { activeIndex } = this.state;

        return React.Children.map(this.props.children, (child, index) => {
            if (!child) return;
            const order = child.props.order;
            let classes = classNames({
                [`${classPrefix}-item`]: true,
                [`${classPrefix}-active`]: activeIndex === order,
                [`${classPrefix}-disabled`]: child.props.disabled,
            });

            const events = {
                onClick: this.handleNavClick.bind(this, order)
            }
            return (
                <li
                    key={order}
                    className={classes}
                    {...events}
                >{child}</li>
            )
        })
    }

    render() {
        let { className } = this.props;

        return (
            <ul className={classNames('navbar', className)}>
                {this.getChildren()}
            </ul>
        )
    }
}