import React from "react";
import PropTypes from 'prop-types';
import { message as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/message/
 * @uxpindescription TODO
 */

const Message = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Message.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Message.defaultProps = {};

export default Message;