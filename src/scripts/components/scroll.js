import React, { Component } from 'react';
import classNames from 'classnames';

export default ({ children, className }) => {
    return (
        <div className={classNames({
            'scroll': true,
            [className]: className
        })}>
            <div className='scroll-container'>
                {children}
            </div>
        </div>
    )
}