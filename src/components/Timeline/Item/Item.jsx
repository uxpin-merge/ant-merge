import React from 'react'
import PropTypes from 'prop-types'
import { Timeline as ANTComponent } from 'antd'

/**
 * @uxpindocurl https://ant.design/components/Timeline/
 * @uxpindescription An item of Timeline.
 * @uxpinnamespace Timeline
 */

const Item = (props) => {
  // Component logic

  return (
    // Your component JSX
    <ANTComponent.Item {...props} />
  )
}

Item.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,

  /** Set the circle's color to blue, red, green, gray or other custom colors
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /** Customize timeline dot */
  dot: PropTypes.node,

  /** Set the label */
  label: PropTypes.node,

  /** Customize node position */
  position: PropTypes.oneOf(['left', 'right']),
}

Item.defaultProps = {}

export default Item
