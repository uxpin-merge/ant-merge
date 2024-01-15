import React from "react";
import PropTypes from 'prop-types';
import { Col as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Col/
 * @uxpindescription TODO
 */

const Col = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Col.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Col.defaultProps = {};

export default Col;