import React from "react";
import PropTypes from 'prop-types';
import { Popconfirm as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Popconfirm/
 * @uxpindescription TODO
 */

const Popconfirm = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Popconfirm.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** The cancel button props */ cancelButtonProps: PropTypes.object, /** The text of the Cancel button */ cancelText: PropTypes.string, /** Whether to show popconfirm when clicking its childrenNode */ disabled: PropTypes.bool, /** Customize icon of confirmation */ icon: PropTypes.node, /** The ok button props */ okButtonProps: PropTypes.object, /** The text of the Confirm button */ okText: PropTypes.string, /** Button type of the Confirm button */ okType: PropTypes.string, /** Show cancel button */ showCancel: PropTypes.bool, /** The title of the confirmation box */ title: PropTypes.oneOfType([PropTypes.node, PropTypes.func]), /** The description of the confirmation box title */ description: PropTypes.oneOfType([PropTypes.node, PropTypes.func]), /** A callback of cancel */ onCancel: PropTypes.func, /** A callback of confirmation */ onConfirm: PropTypes.func, /** A callback of popup click */ onPopupClick: PropTypes.func,
    
};

Popconfirm.defaultProps = {};

export default Popconfirm;