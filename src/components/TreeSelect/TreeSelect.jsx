import React from "react";
import PropTypes from 'prop-types';
import { TreeSelect as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/TreeSelect/
 * @uxpindescription TODO
 */

const TreeSelect = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

TreeSelect.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

TreeSelect.defaultProps = {};

export default TreeSelect;