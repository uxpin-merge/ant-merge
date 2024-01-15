import React from "react";
import PropTypes from 'prop-types';
import { Form as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Form/
 * @uxpindescription TODO
 */

const Form = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Form.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Form.defaultProps = {};

export default Form;