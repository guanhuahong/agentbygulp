import React, { Component } from 'react';

export default function Icon({ type, className }) {
    return (
        <i className={`icon icon-${type} ${className||''}`} />
    );
}