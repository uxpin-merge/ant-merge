import React from "react";
import PropTypes from 'prop-types';
import { Alert as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Alert/
 * @uxpindescription TODO
 */

const Alert = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Alert.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Alert.defaultProps = {};

export default Alert;