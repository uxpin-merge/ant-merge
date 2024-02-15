import React from 'react'
import PropTypes from 'prop-types'
import { Radio as ANTComponent } from 'antd'

/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 * @uxpindescription Generate a group of Radios.
 * @uxpinnamespace Radio
 */

const Button = (props) => {
  // Component logic

  return (
    // Your component JSX
    <ANTComponent.Button {...props} />
  )
}

Button.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,

  /** Whether to get focus when the component is mounted */ autoFocus: PropTypes.bool,
  /** Specifies whether the radio is selected */ checked: PropTypes.bool,
  /** Specifies the initial state: whether or not the radio is selected */ defaultChecked: PropTypes.bool,
  /** Disable radio */ disabled: PropTypes.bool,
  /** According to value for comparison, to determine whether the selected */ value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
}

Button.defaultProps = {}

export default Button
