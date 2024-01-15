import React from "react";
import PropTypes from 'prop-types';
import { notification as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/notification/
 * @uxpindescription TODO
 */

const Notification = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Notification.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Notification.defaultProps = {};

export default Notification;