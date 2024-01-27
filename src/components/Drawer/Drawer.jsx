import React from "react";
import PropTypes from 'prop-types';
import { Drawer as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Drawer/
 * @uxpindescription TODO
 */

const Drawer = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Drawer.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether Drawer should get focused after open */ autoFocus: PropTypes.bool, /** Callback after the animation ends when switching drawers */ afterOpenChange: PropTypes.func, /** Config Drawer Panel className. Use rootClassName if want to config top dom style */ className: PropTypes.string, /** Config Drawer build-in module's className */ header: PropTypes.string, body: PropTypes.string, footer: PropTypes.string, mask: PropTypes.string, content: PropTypes.string, wrapper: PropTypes.string, /** Config Drawer build-in module's style */ header: PropTypes.object, body: PropTypes.object, footer: PropTypes.object, mask: PropTypes.object, content: PropTypes.object, wrapper: PropTypes.object, /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */ closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]), /** Whether to unmount child components on closing drawer or not */ destroyOnClose: PropTypes.bool, /** Extra actions area at corner */ extra: PropTypes.node, /** The footer for Drawer */ footer: PropTypes.node, /** Pre-render Drawer component forcibly */ forceRender: PropTypes.bool, /** Mounted node and display window for Drawer */ /** Style of the drawer header part */ headerStyle: PropTypes.object, /** Placement is top or bottom, height of the Drawer dialog */ height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), /** Whether support press esc to close */ keyboard: PropTypes.bool, /** Whether to show mask or not */ mask: PropTypes.bool, /** Clicking on the mask (area outside the Drawer) to close the Drawer or not */ maskClosable: PropTypes.bool, /** The placement of the Drawer */ placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']), /** Nested drawers push behavior */ distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), /** Style of wrapper element which contains mask compare to style */ rootStyle: PropTypes.object, /** Style of Drawer panel. Use bodyStyle if want to config body only */ style: PropTypes.object, /** Preset size of drawer, default 378px and large 736px */ size: PropTypes.oneOf(['default', 'large']), /** The title for Drawer */ title: PropTypes.node, /** Whether the Drawer dialog is visible or not */ open: PropTypes.bool, /** Width of the Drawer dialog */ width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), /** The z-index of the Drawer */ zIndex: PropTypes.number, /** Specify a callback that will be called when a user clicks mask, close button or Cancel button */ onClose: PropTypes.func,
    
};

Drawer.defaultProps = {};

export default Drawer;