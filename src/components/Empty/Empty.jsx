import React from "react";
import PropTypes from 'prop-types';
import { Empty as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Empty/
 * @uxpindescription TODO
 */

const Empty = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Empty.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Empty.defaultProps = {};

export default Empty;