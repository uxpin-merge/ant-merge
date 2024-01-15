import React from "react";
import PropTypes from 'prop-types';
import { Collapse as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Collapse/
 * @uxpindescription TODO
 */

const Collapse = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Collapse.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Collapse.defaultProps = {};

export default Collapse;