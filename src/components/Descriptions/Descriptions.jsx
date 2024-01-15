import React from "react";
import PropTypes from 'prop-types';
import { Descriptions as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Descriptions/
 * @uxpindescription TODO
 */

const Descriptions = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Descriptions.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Descriptions.defaultProps = {};

export default Descriptions;