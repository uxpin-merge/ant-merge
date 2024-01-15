import React from "react";
import PropTypes from 'prop-types';
import { Avatar as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Avatar/
 * @uxpindescription TODO
 */

const Avatar = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Avatar.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Avatar.defaultProps = {};

export default Avatar;