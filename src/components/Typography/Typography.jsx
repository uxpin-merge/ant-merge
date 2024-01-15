import React from "react";
import PropTypes from 'prop-types';
import { Typography as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Typography/
 * @uxpindescription TODO
 */

const Typography = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Typography.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Typography.defaultProps = {};

export default Typography;