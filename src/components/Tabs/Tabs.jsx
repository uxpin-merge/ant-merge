import React from "react";
import PropTypes from 'prop-types';
import { Tabs as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tabs/
 * @uxpindescription TODO
 */

const Tabs = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Tabs.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Tabs.defaultProps = {};

export default Tabs;