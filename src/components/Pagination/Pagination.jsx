import React from "react";
import PropTypes from 'prop-types';
import { Pagination as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Pagination/
 * @uxpindescription TODO
 */

const Pagination = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Pagination.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Pagination.defaultProps = {};

export default Pagination;