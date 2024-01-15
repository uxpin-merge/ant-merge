import React from "react";
import PropTypes from 'prop-types';
import { Dropdown as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Dropdown/
 * @uxpindescription TODO
 */

const Dropdown = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Dropdown.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Dropdown.defaultProps = {};

export default Dropdown;