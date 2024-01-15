import React from "react";
import PropTypes from 'prop-types';
import { InputNumber as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/InputNumber/
 * @uxpindescription TODO
 */

const InputNumber = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

InputNumber.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

InputNumber.defaultProps = {};

export default InputNumber;