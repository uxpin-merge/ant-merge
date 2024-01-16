import React from "react";
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

/**
 * @uxpindocurl https://ant.design/components/Typography.Text/
 * @uxpindescription TODO
 */
/**
 * @uxpinnamespace Typography
 */
const Text = (props) => {
    // Component logic

    return (
        // Your component JSX
        <Title>test</Title>

    );
};

Text.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /**
     * Code style.
     */
    code: PropTypes.bool,

    /**
     * Whether to be copyable, customize it via setting an object.
     * Type can be boolean or 'copyable' object.
     */
    copyable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // copyable object
    ]),

    /**
     * Deleted line style.
     */
    delete: PropTypes.bool,

    /**
     * Disabled content.
     */
    disabled: PropTypes.bool,

    /**
     * If editable. Can be a boolean or an 'editable' object for more control.
     */
    editable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // editable object
    ]),

    /**
     * Display ellipsis when text overflows. Configurable with an object.
     * Note: 'expandable', 'rows', and 'onExpand' properties are not applicable.
     */
    ellipsis: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // Omit<ellipsis, 'expandable' | 'rows' | 'onExpand'>
    ]),

    /**
     * Keyboard style.
     * Version: 4.3.0
     */
    keyboard: PropTypes.bool,

    /**
     * Marked style.
     */
    mark: PropTypes.bool,

    /**
     * Set the handler to handle click event.
     */
    onClick: PropTypes.func, // (event) => void

    /**
     * Bold style.
     */
    strong: PropTypes.bool,

    /**
     * Italic style.
     * Version: 4.16.0
     */
    italic: PropTypes.bool,

    /**
     * Content type. Values are 'secondary', 'success', 'warning', or 'danger'.
     */
    type: PropTypes.oneOf(['secondary', 'success', 'warning', 'danger']),

    /**
     * Underlined style.
     * Version: 4.16.0
     */
    underline: PropTypes.bool,
};

Text.defaultProps = {};

export default Text;