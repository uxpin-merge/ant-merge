import React from "react";
import PropTypes from 'prop-types';
import { Tooltip as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tooltip/
 * @uxpindescription TODO
 */

const Tooltip = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Tooltip.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Tooltip.defaultProps = {};

export default Tooltip;