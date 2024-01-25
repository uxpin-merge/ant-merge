import React from "react";
import PropTypes from 'prop-types';
import { Input as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Input/
 * @uxpindescription TODO
 */

const Input = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Input.propTypes = {

    /** The label text displayed after (on the right side of) the input field */
    addonAfter: PropTypes.node,

    /** The label text displayed before (on the left side of) the input field */
    addonBefore: PropTypes.node,

    /** If allow to remove input content with clear icon */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node })
    ]),

    /** Semantic DOM class */
    classNames: PropTypes.objectOf(PropTypes.string),

    /** Character count config */
    count: PropTypes.object, // CountConfig

    /** The initial input content */
    defaultValue: PropTypes.string,

    /** Whether the input is disabled */
    disabled: PropTypes.bool,

    /** The ID for input */
    id: PropTypes.string,

    /** The maximum number of characters in Input */
    maxLength: PropTypes.number,

    /** The prefix icon for the Input */
    prefix: PropTypes.node,

    /** Whether to show character count */
    showCount: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            formatter: PropTypes.func // (info: { value: string, count: number, maxLength?: number }) => ReactNode
        })
    ]),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.objectOf(PropTypes.object), // CSSProperties

    /** The size of the input box */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** The suffix icon for the Input */
    suffix: PropTypes.node,

    /** The type of input */
    type: PropTypes.string,

    /** The input content value */
    value: PropTypes.string,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback when user input */
    onChange: PropTypes.func,

    /** The callback function that is triggered when Enter key is pressed */
    onPressEnter: PropTypes.func,
};

Input.defaultProps = {};

export default Input;