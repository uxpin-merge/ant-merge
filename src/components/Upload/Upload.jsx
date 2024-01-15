import React from "react";
import PropTypes from 'prop-types';
import { Upload as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Upload/
 * @uxpindescription TODO
 */

const Upload = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Upload.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Upload.defaultProps = {};

export default Upload;