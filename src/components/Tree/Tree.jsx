import React from "react";
import PropTypes from 'prop-types';
import { Tree as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tree/
 * @uxpindescription TODO
 */

const Tree = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Tree.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Tree.defaultProps = {};

export default Tree;