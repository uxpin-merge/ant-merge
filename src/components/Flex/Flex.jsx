import React from "react";
import PropTypes from 'prop-types';
import { Flex as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Flex/
 * @uxpindescription TODO
 */

const Flex = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Flex.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Flex.defaultProps = {};

export default Flex;