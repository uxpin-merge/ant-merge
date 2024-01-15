import React from "react";
import PropTypes from 'prop-types';
import { Timeline as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Timeline/
 * @uxpindescription TODO
 */

const Timeline = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Timeline.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Timeline.defaultProps = {};

export default Timeline;