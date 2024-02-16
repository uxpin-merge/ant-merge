import React from 'react'
import PropTypes from 'prop-types'
import { Tour as ANTComponent } from 'antd'
import Step from './Step/Step'
import { v4 as uuidv4 } from 'uuid'

/**
 * @uxpindocurl https://ant.design/components/Tour/
 * @uxpindescription A popup component for guiding users through a product
 * @uxpinuseportal
 */

const Tour = (props) => {
  // Component logic
  const id = `drawer-${uuidv4()}`
  const container = `#${id}`

  return (
    // Your component JSX

    <div style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }} className="merge-component">
      <ANTComponent getPopupContainer={() => container} {...props} />
      <div id={id}></div>
    </div>
  )
}

Tour.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,
  /** Whether to show the arrow, including the configuration whether to point to the center of the element */
  arrow: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ pointAtCenter: PropTypes.bool })]),

  /** Customize close icon */
  closeIcon: PropTypes.node,

  /** Disable interaction on highlighted area */
  disabledInteraction: PropTypes.bool,

  /** Position of the guide card relative to the target element */
  placement: PropTypes.oneOf([
    'center',
    'left',
    'leftTop',
    'leftBottom',
    'right',
    'rightTop',
    'rightBottom',
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
  ]),

  /** Callback function on shutdown */
  onClose: PropTypes.func,

  /** Whether to enable masking, change mask style and fill color by pass custom props */
  mask: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      style: PropTypes.object,
      color: PropTypes.string,
    }),
  ]),

  /** Type, affects the background color and text color */
  type: PropTypes.oneOf(['default', 'primary']),

  /** Open tour */
  open: PropTypes.bool,

  /** Callback when the step changes. Current is the previous step */
  onChange: PropTypes.func,

  /** What is the current step */
  current: PropTypes.number,

  /** support pass custom scrollIntoView options */
  scrollIntoViewOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object, // ScrollIntoViewOptions
  ]),

  /** custom indicator */
  indicatorsRender: PropTypes.func,

  /** Tour's zIndex */
  zIndex: PropTypes.number,

  /** Set the rendering node of Tour floating layer */
  getPopupContainer: PropTypes.func,

  steps: PropTypes.object,
}

Tour.defaultProps = {}

Tour.Step = Step

export default Tour
