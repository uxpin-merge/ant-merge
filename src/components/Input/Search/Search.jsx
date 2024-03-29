import React from 'react'
import PropTypes from 'prop-types'
import { Input as ANTComponent } from 'antd'

/**
 * @uxpindocurl https://ant.design/components/Input/
 * @uxpindescription A basic widget for getting the user input is a text field.
 * @uxpinnamespace Input
 */

const Search = (props) => {
  //Component logic

  return (
    //Your component JSX
    <ANTComponent.Search {...props} />
  )
}

Search.propTypes = {
  /**  The label text displayed after (on the right side of) the input field */
  addonAfter: PropTypes.node,

  /**  The label text displayed before (on the left side of) the input field */
  addonBefore: PropTypes.node,

  /**  If allow to remove input content with clear icon */
  allowClear: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ clearIcon: PropTypes.node })]),
  /** Semantic DOM class */
  classNames: PropTypes.objectOf(PropTypes.string),
  /**  Specifies the visible width of a text area */
  cols: PropTypes.number,

  /**  Character count config */
  count: PropTypes.object,

  /**  The initial input content */
  defaultValue: PropTypes.string,

  /**  Whether the input is disabled */
  disabled: PropTypes.bool,

  /**  Whether to show an enter button after input. This property conflicts with the addonAfter property	 */
  enterButton: PropTypes.node,

  /**  The ID for input */
  id: PropTypes.string,

  /**  Whether to show an enter button after input. This property conflicts with the addonAfter property	 */
  loading: PropTypes.bool,

  /**  The maximum number of characters in Input */
  maxLength: PropTypes.number,

  /**  Callback when user input */
  onChange: PropTypes.func,

  /**  The callback function that is triggered when Enter key is pressed */
  onPressEnter: PropTypes.func,

  /**  The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key	 */
  onSeacrh: PropTypes.func,

  /** Placeholder text for the Input */
  placeholder: PropTypes.string,

  /**  The prefix icon for the Input */
  prefix: PropTypes.node,

  /**  Specifies that a text area should be read-only */
  readOnly: PropTypes.bool,

  /**  Specifies that a text area is required/must be filled out */
  required: PropTypes.bool,

  /**  Specifies the visible number of lines in a text area */
  rows: PropTypes.number,

  /**  Whether to show character count */
  showCount: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      formatter: PropTypes.func,
    }),
  ]),

  /**  The size of the input box */
  size: PropTypes.oneOf(['large', 'middle', 'small']),

  /**  Set validation status */
  status: PropTypes.oneOf(['error', 'warning']),
  /** Style override css for the component */
  style: PropTypes.object,

  /**  Semantic DOM style */
  styles: PropTypes.object,

  /**  The suffix icon for the Input */
  suffix: PropTypes.node,

  /**  Type of the `input` element */
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),

  /**  The input content value */
  value: PropTypes.string,

  /**  Variants of Input */
  variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),
}

Search.defaultProps = {
  styles: {
    input: {},
    prefix: {},
    suffix: {},
    count: {},
  },
}

export default Search
