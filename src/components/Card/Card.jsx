import React from "react";
import PropTypes from 'prop-types';
import { Card as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Card/
 * @uxpindescription TODO
 */

const Card = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Card.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    
};

Card.defaultProps = {};

export default Card;