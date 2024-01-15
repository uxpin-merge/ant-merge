import React from "react";
import PropTypes from 'prop-types';
import { Calendar as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Calendar/
 * @uxpindescription TODO
 */

const Calendar = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Calendar.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Calendar.defaultProps = {};

export default Calendar;