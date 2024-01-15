import React from "react";
import PropTypes from 'prop-types';
import { Image as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Image/
 * @uxpindescription TODO
 */

const Image = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Image.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Image.defaultProps = {};

export default Image;