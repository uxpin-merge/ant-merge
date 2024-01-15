import React from "react";
import PropTypes from 'prop-types';
import { ColorPicker as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/ColorPicker/
 * @uxpindescription TODO
 */

const ColorPicker = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

ColorPicker.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

ColorPicker.defaultProps = {};

export default ColorPicker;