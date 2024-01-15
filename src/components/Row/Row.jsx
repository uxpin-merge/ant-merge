import React from "react";
import PropTypes from 'prop-types';
import { Row as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Row/
 * @uxpindescription TODO
 */

const Row = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Row.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Row.defaultProps = {};

export default Row;