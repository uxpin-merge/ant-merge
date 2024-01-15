import React from "react";
import PropTypes from 'prop-types';
import { Drawer as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Drawer/
 * @uxpindescription TODO
 */

const Drawer = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Drawer.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Drawer.defaultProps = {};

export default Drawer;