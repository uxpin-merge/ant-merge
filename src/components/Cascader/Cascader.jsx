import React from "react";
import PropTypes from 'prop-types';
import { Cascader as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Cascader/
 * @uxpindescription TODO
 */

const Cascader = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Cascader.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Cascader.defaultProps = {};

export default Cascader;