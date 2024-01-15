import React from "react";
import PropTypes from 'prop-types';
import { Spin as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Spin/
 * @uxpindescription TODO
 */

const Spin = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Spin.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Spin.defaultProps = {};

export default Spin;