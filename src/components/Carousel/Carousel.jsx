import React from "react";
import PropTypes from 'prop-types';
import { Carousel as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Carousel/
 * @uxpindescription TODO
 */

const Carousel = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Carousel.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Carousel.defaultProps = {};

export default Carousel;