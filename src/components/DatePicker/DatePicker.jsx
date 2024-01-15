import React from "react";
import PropTypes from 'prop-types';
import { DatePicker as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/DatePicker/
 * @uxpindescription TODO
 */

const DatePicker = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

DatePicker.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

DatePicker.defaultProps = {};

export default DatePicker;