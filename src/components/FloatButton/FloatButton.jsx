import React from "react";
import PropTypes from 'prop-types';
import { FloatButton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/FloatButton/
 * @uxpindescription TODO
 */

const FloatButton = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

FloatButton.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

FloatButton.defaultProps = {};

export default FloatButton;