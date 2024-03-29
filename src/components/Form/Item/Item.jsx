import React from "react";
import PropTypes from 'prop-types';
import { Form as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Descriptions/
 * @uxpindescription Display multiple read-only fields in groups.
 * @uxpinnamespace Form
 */

const Item = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Item {...props} />

    );
};

Item.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to display ':' after label text */
    colon: PropTypes.bool,

    /** Set the dependency field */
    dependencies: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])),

    /** Extra prompt message, similar to help */
    extra: PropTypes.node,

    /** Specify how to get value from event or other onChange arguments */
    getValueFromEvent: PropTypes.func,

    /** Additional props with sub component */
    getValueProps: PropTypes.func,

    /** Whether to show validation feedback icon, and custom icons */
    hasFeedback: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ icons: PropTypes.object })
    ]),

    /** The prompt message. If not provided, it will be generated by the validation rule */
    help: PropTypes.node,

    /** Whether to hide Form.Item but still collect and validate its value */
    hidden: PropTypes.bool,

    /** Set sub label htmlFor */
    htmlFor: PropTypes.string,

    /** Config sub default value */
    initialValue: PropTypes.any,

    /** Label text */
    label: PropTypes.node,

    /** The text align of label */
    labelAlign: PropTypes.oneOf(['left', 'right']),

    /** The layout of label */
    labelCol: PropTypes.object,

    /** The default validate field info */
    messageVariables: PropTypes.objectOf(PropTypes.string),

    /** Field name, supports array format */
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
    ]),

    /** Normalize value from component value before passing to Form instance */
    normalize: PropTypes.func,

    /** No style for true, used as a pure field control */
    noStyle: PropTypes.bool,

    /** Keep field value even when field removed */
    preserve: PropTypes.bool,

    /** Display required style, generated by the validation rule */
    required: PropTypes.bool,

    /** Rules for field validation */
    rules: PropTypes.arrayOf(PropTypes.object),

    /** Custom field update logic */
    shouldUpdate: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),

    /** Config tooltip info */
    tooltip: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.object // should be a TooltipProps with additional 'icon' node
    ]),

    /** When to collect the value of children node */
    trigger: PropTypes.string,

    /** Delay milliseconds to start validation */
    validateDebounce: PropTypes.number,

    /** Whether to stop validate on first rule of error for this field */
    validateFirst: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['parallel'])
    ]),

    /** The validation status */
    validateStatus: PropTypes.oneOf(['success', 'warning', 'error', 'validating']),

    /** When to validate the value of children node */
    validateTrigger: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** Props of children node, e.g., the prop of Switch or Checkbox is 'checked' */
    valuePropName: PropTypes.string,

    /** The layout for input controls, similar to labelCol */
    wrapperCol: PropTypes.object,
};

Item.defaultProps = {};

export default Item;