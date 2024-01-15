import React from "react";
import PropTypes from 'prop-types';
import { QRCode as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/QRCode/
 * @uxpindescription TODO
 */

const QrCode = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

QrCode.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

QrCode.defaultProps = {};

export default QrCode;