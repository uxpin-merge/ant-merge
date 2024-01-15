import React from "react";
import PropTypes from 'prop-types';
import { Menu as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Menu/
 * @uxpindescription TODO
 */

const Menu = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Menu.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Menu.defaultProps = {};

export default Menu;