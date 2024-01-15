import React from "react";
import PropTypes from 'prop-types';
import { Button as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Button/
 * @uxpindescription TODO
 */

const Button = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Button.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Button.defaultProps = {};

export default Button;