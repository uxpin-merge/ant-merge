import React from "react";
import PropTypes from 'prop-types';
import { Table as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Table/
 * @uxpindescription TODO
 */

const Table = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Table.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Table.defaultProps = {};

export default Table;