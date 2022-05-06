import React from 'react';
import classes from './TwoSideTitle.module.css';

const TwoSideTitle = props => {
    return (
        <div className={classes['two-side-title']}>
            {props.children}
        </div>
    )
}

export default TwoSideTitle;