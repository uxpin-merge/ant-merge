import React from "react";
import PropTypes from 'prop-types';
import { Segmented as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Segmented/
 * @uxpindescription TODO
 */

const Segmented = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Segmented.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Segmented.defaultProps = {};

export default Segmented;