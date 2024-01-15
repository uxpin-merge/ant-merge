import React from "react";
import PropTypes from 'prop-types';
import { Popover as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Popover/
 * @uxpindescription TODO
 */

const Popover = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Popover.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Popover.defaultProps = {};

export default Popover;