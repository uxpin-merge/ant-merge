import React from "react";
import PropTypes from 'prop-types';
import { Result as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Result/
 * @uxpindescription TODO
 */

const Result = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Result.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Result.defaultProps = {};

export default Result;