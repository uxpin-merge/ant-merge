import React from "react";
import PropTypes from 'prop-types';
import { Popconfirm as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Popconfirm/
 * @uxpindescription TODO
 */

const Popconfirm = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Popconfirm.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Popconfirm.defaultProps = {};

export default Popconfirm;