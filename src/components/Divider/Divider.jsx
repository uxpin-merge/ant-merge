import React from "react";
import PropTypes from 'prop-types';
import { Divider as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Divider/
 * @uxpindescription TODO
 */

const Divider = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Divider.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Divider.defaultProps = {};

export default Divider;