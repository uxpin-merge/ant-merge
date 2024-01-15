import React from "react";
import PropTypes from 'prop-types';
import { Select as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Select/
 * @uxpindescription TODO
 */

const Select = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Select.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Select.defaultProps = {};

export default Select;