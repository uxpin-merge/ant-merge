import React from "react";
import PropTypes from 'prop-types';
import { Layout as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Layout/
 * @uxpindescription TODO
 */

const Layout = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Layout.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Layout.defaultProps = {};

export default Layout;