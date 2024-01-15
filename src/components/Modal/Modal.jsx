import React from "react";
import PropTypes from 'prop-types';
import { Modal as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Modal/
 * @uxpindescription TODO
 */

const Modal = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Modal.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Modal.defaultProps = {};

export default Modal;