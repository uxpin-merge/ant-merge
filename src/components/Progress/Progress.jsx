import React from "react";
import PropTypes from 'prop-types';
import { Progress as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Progress/
 * @uxpindescription TODO
 */

const Progress = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Progress.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Progress.defaultProps = {};

export default Progress;