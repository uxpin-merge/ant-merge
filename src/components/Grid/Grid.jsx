import React from "react";
import PropTypes from 'prop-types';
import { Grid as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Grid/
 * @uxpindescription TODO
 */

const Grid = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Grid.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Grid.defaultProps = {};

export default Grid;