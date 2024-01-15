import React from "react";
import PropTypes from 'prop-types';
import { Switch as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Switch/
 * @uxpindescription TODO
 */

const Switch = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Switch.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Switch.defaultProps = {};

export default Switch;