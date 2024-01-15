import React from "react";
import PropTypes from 'prop-types';
import { Badge as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Badge/
 * @uxpindescription TODO
 */

const Badge = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Badge.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Badge.defaultProps = {};

export default Badge;