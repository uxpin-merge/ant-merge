import React from "react";
import PropTypes from 'prop-types';
import { Radio as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Radio/
 * @uxpindescription TODO
 */

const Radio = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Radio.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Radio.defaultProps = {};

export default Radio;