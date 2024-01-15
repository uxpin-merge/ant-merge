import React from "react";
import PropTypes from 'prop-types';
import { Tag as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tag/
 * @uxpindescription TODO
 */

const Tag = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Tag.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Tag.defaultProps = {};

export default Tag;