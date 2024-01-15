import React from "react";
import PropTypes from 'prop-types';
import { Tour as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tour/
 * @uxpindescription TODO
 */

const Tour = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Tour.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Tour.defaultProps = {};

export default Tour;