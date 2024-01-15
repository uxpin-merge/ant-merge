import React from "react";
import PropTypes from 'prop-types';
import { Statistic as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Statistic/
 * @uxpindescription TODO
 */

const Statistic = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Statistic.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Statistic.defaultProps = {};

export default Statistic;