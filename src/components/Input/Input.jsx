import React from "react";
import PropTypes from 'prop-types';
import { Input as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Input/
 * @uxpindescription TODO
 */

const Input = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Input.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Input.defaultProps = {};

export default Input;