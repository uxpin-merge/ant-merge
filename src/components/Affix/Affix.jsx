import React from "react";
import PropTypes from 'prop-types';
import { Affix as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Afix/
 * @uxpindescription Alert component for feedback.
 * @uxpinusssseportal
 */

const Affix = (props) => {
    // Component logic

    return (
        // Your component JSX
        // <div style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}>

        <ANTComponent {...props}
            target={() => document.getElementsByClassName("preview-container")}
        />
        // </div>

    );
};

Affix.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Offset from the bottom of the viewport (in pixels) */
    offsetBottom: PropTypes.number,

    /** Offset from the top of the viewport (in pixels) */
    offsetTop: PropTypes.number,

    /** Specifies the scrollable area DOM node */
    target: PropTypes.func, // () => HTMLElement

    /** Callback for when Affix state is changed */
    onChange: PropTypes.func // (affixed?: boolean) => void
};

Affix.defaultProps = {};

export default Affix;