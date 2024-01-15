import React from "react";
import PropTypes from 'prop-types';
import { AutoComplete as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/AutoComplete/
 * @uxpindescription TODO
 */

const AutoComplete = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

AutoComplete.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

AutoComplete.defaultProps = {};

export default AutoComplete;