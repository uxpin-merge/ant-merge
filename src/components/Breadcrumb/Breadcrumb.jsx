import React from "react";
import PropTypes from 'prop-types';
import { Breadcrumb as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Breadcrumb/
 * @uxpindescription TODO
 */

const Breadcrumb = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Breadcrumb.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Breadcrumb.defaultProps = {};

export default Breadcrumb;