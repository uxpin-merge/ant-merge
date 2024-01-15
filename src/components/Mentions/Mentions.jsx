import React from "react";
import PropTypes from 'prop-types';
import { Mentions as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Mentions/
 * @uxpindescription TODO
 */

const Mentions = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Mentions.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Mentions.defaultProps = {};

export default Mentions;