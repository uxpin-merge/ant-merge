import React from "react";
import PropTypes from 'prop-types';
import { Slider as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Slider/
 * @uxpindescription TODO
 */

const Slider = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Slider.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Slider.defaultProps = {};

export default Slider;