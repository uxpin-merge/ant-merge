import React from "react";
import PropTypes from 'prop-types';
import { BackTop as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/BackTop/
 * @uxpindescription TODO
 */

const BackTop = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

BackTop.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

BackTop.defaultProps = {};

export default BackTop;