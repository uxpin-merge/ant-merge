import React from "react";
import PropTypes from 'prop-types';
import { Space as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Space/
 * @uxpindescription TODO
 */

const Space = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Space.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Space.defaultProps = {};

export default Space;