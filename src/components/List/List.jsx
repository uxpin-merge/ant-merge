import React from "react";
import PropTypes from 'prop-types';
import { List as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/List/
 * @uxpindescription TODO
 */

const List = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

List.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

List.defaultProps = {};

export default List;