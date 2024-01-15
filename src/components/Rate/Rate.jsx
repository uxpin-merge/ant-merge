import React from "react";
import PropTypes from 'prop-types';
import { Rate as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Rate/
 * @uxpindescription TODO
 */

const Rate = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Rate.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Rate.defaultProps = {};

export default Rate;