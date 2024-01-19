import React from "react";
import PropTypes from 'prop-types';
import { Anchor as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Anchor/
 * @uxpindescription TODO
 */

const Anchor = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Anchor.propTypes = {
    /** Fixed mode of Anchor */
    affix: PropTypes.bool,

    /** Bounding distance of anchor area */
    bounds: PropTypes.number,

    /** Set the component that will be rendered */
    children: PropTypes.node,

    /** Set Anchor direction */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /** Listening for anchor link change */
    onChange: PropTypes.func,

    /** Set the handler to handle click event */
    onClick: PropTypes.func,

    /** Whether show ink-square when affix={false} */
    showInkInFixed: PropTypes.bool,

    /** Anchor scroll offset, default as offsetTop, example */
    targetOffset: PropTypes.number,

    /** Scrolling container */
    getContainer: PropTypes.func,

    /** Customize the anchor highlight */
    getCurrentAnchor: PropTypes.func,

    /** Pixels to offset from top when calculating position of scroll */
    offsetTop: PropTypes.number,

    /** Replace items' href in browser history instead of pushing it */
    replace: PropTypes.bool,

    /** Data configuration option content, support nesting through children */
    items: PropTypes.arrayOf(
        PropTypes.shape({
            children: PropTypes.node,
            href: PropTypes.string,
            key: PropTypes.string,
            target: PropTypes.string,
            title: PropTypes.string,
        })
    ),
};

Anchor.defaultProps = {};

export default Anchor;