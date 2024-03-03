import React from 'react'
import PropTypes from 'prop-types'
import { AutoComplete as ANTComponent } from 'antd'

/**
 * @uxpindocurl https://ant.design/components/AutoComplete/
 * @uxpindescription Autocomplete function of input field.
 */

const AutoComplete = (props) => {
  // Component logic

  return (
    // Your component JSX
    <ANTComponent {...props} style={{ width: '100%' }} />
  )
}

AutoComplete.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,

  /** Show clear button */
  allowClear: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ clearIcon: PropTypes.node })]),

  /** If get focus when component mounted */
  autoFocus: PropTypes.bool,

  /** If backfill selected item the input when using keyboard */
  backfill: PropTypes.bool,

  /** Data source to auto complete */
  dataSource: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),

  /** Whether active first option by default */
  defaultActiveFirstOption: PropTypes.bool,

  /** Initial open state of dropdown */
  defaultOpen: PropTypes.bool,

  /** Initial selected option */
  defaultValue: PropTypes.string,

  /** Whether disabled select */
  disabled: PropTypes.bool,

  /** The className of dropdown menu */
  popupClassName: PropTypes.string,

  /** Determine whether the dropdown menu and the select input are the same width */
  dropdownMatchSelectWidth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /** If true, filter options by input, if function, filter options against it */
  filterOption: PropTypes.bool,

  /** Specify content to show when no result matches */
  notFoundContent: PropTypes.node,

  /** Controlled open state of dropdown */
  open: PropTypes.bool,

  /** Select options
   */
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.node, value: PropTypes.string })),

  /** The placeholder of input */
  placeholder: PropTypes.string,

  /** Set validation status */
  status: PropTypes.oneOf(['error', 'warning']),

  /** Selected option
   * @uxpinbind onChange
   */
  value: PropTypes.string,

  /** Variants of input */
  variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

  /** Called when leaving the component */
  onBlur: PropTypes.func,

  /** Called when selecting an option or changing an input value */
  onChange: PropTypes.func,

  /** Call when dropdown open */
  onDropdownVisibleChange: PropTypes.func,

  /** Called when entering the component */
  onFocus: PropTypes.func,

  /** Called when searching items */
  onSearch: PropTypes.func,

  /** Called when a option is selected. param is option's value and option instance */
  onSelect: PropTypes.func,

  /** Called when clear */
  onClear: PropTypes.func,
}

AutoComplete.defaultProps = {}

export default AutoComplete
