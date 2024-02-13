import React from 'react'
import PropTypes from 'prop-types'
import { Skeleton as ANTComponent } from 'antd'

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.
 * @uxpinnamespace Skeleton
 */

const Image = (props) => {
  // Component logic

  return (
    // Your component JSX
    <ANTComponent.Image {...props} />
  )
}

Image.propTypes = {
  /** Show animation effect */
  active: PropTypes.bool,

  /** The style properties of the component */
  style: PropTypes.object,
}

Image.defaultProps = {}

export default Image
