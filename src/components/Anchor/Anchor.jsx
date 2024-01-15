import React from "react";
import PropTypes from 'prop-types';
import { Anchor as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Anchor/
 * @uxpindescription TODO
 */

const Anchor = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Anchor.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Anchor.defaultProps = {};

export default Anchor;