import React from "react";
import PropTypes from 'prop-types';
import { Affix as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Affix/
 * @uxpindescription TODO
 */

const Affix = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Affix.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Affix.defaultProps = {};

export default Affix;