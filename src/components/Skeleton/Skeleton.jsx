import React from "react";
import PropTypes from 'prop-types';
import { Skeleton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription TODO
 */

const Skeleton = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Skeleton.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Show animation effect */ active: PropTypes.bool, /** Show avatar placeholder */ /** Show animation effect, only valid when used avatar independently */ active: PropTypes.bool, /** Set the shape of avatar */ shape: PropTypes.oneOf(['circle', 'square']), /** Set the size of avatar */ /** Display the skeleton when true */ loading: PropTypes.bool, /** Show paragraph placeholder */ /** Set the row count of paragraph */ rows: PropTypes.number, /** Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width */ /** Show paragraph and title radius when true */ round: PropTypes.bool, /** Show title placeholder */ /** Set the width of title */ width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    
};

Skeleton.defaultProps = {};

export default Skeleton;