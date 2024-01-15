import React from "react";
import PropTypes from 'prop-types';
import { Transfer as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Transfer/
 * @uxpindescription TODO
 */

const Transfer = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Transfer.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Transfer.defaultProps = {};

export default Transfer;