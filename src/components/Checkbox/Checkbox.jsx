import React from "react";
import PropTypes from 'prop-types';
import { Checkbox as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 * @uxpindescription TODO
 */

const Checkbox = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Checkbox.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Checkbox.defaultProps = {};

export default Checkbox;