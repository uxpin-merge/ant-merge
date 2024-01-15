import React from "react";
import PropTypes from 'prop-types';
import { TimePicker as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/TimePicker/
 * @uxpindescription TODO
 */

const TimePicker = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

TimePicker.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

TimePicker.defaultProps = {};

export default TimePicker;