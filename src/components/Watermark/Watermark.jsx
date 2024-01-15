import React from "react";
import PropTypes from 'prop-types';
import { Watermark as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Watermark/
 * @uxpindescription TODO
 */

const Watermark = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Watermark.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Watermark.defaultProps = {};

export default Watermark;