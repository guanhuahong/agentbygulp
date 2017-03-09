import React, { Component } from 'react';
import classNames from 'classnames';

export default function NavBarItem({classPrefix, className, isActive,children}) {
    return (
        <div className={classNames({
            [className]: className,
        })}>
            {children}
        </div>
    );
}