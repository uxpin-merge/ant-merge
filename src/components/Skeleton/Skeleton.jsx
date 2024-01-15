import React from "react";
import PropTypes from 'prop-types';
import { Skeleton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription TODO
 */

const Skeleton = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Skeleton.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Skeleton.defaultProps = {};

export default Skeleton;