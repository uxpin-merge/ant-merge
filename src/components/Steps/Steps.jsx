import React from "react";
import PropTypes from 'prop-types';
import { Steps as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Steps/
 * @uxpindescription TODO
 */

const Steps = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Steps.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Steps.defaultProps = {};

export default Steps;