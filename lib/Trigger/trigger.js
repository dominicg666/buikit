import React from 'react';
import { func, node, shape, string } from 'prop-types';
import './trigger.scss';


const Trigger = props => {
    const { action, children, classes } = props;

    return (
        <button className={"trigger_root btn btn-primary-outline " + classes} type="button" onClick={action}>
            {children}
        </button>
    );
};


Trigger.propTypes = {
    action: func.isRequired,
    children: node,
    classes: shape({
        root: string
    })
};

export default Trigger;
