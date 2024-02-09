import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as ANTComponent } from 'antd'
import Group from './Group/Group'

/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 * @uxpindescription Checkbox component.
 */

const Checkbox = (props) => {
  // Component logic

  return (
    // Your component JSX
    <ANTComponent {...props} />
  )
}

Checkbox.propTypes = {
  /**   If get focus when component mounted. */
  autoFocus: PropTypes.bool,

  /**
   * If `true`, the component is checked.
   * @uxpinbind onChange 0.target.checked
   */
  checked: PropTypes.bool,
  /** Additional CSS class for the Checkbox */
  className: PropTypes.string,
  /** The content of the component. */
  children: PropTypes.node,

  /** Initial value whether the Checkbox is checked */
  defaultChecked: PropTypes.bool,
  /** Disable the Checkbox */
  disabled: PropTypes.bool,
  /** The indeterminate checked state of checkbox	 */
  indeterminate: PropTypes.bool,

  /** Callback function when the state changes */
  onChange: PropTypes.func,

  /** The style properties of the component */
  style: PropTypes.object,
}

Checkbox.defaultProps = {}

Checkbox.Group = Group

export default Checkbox
