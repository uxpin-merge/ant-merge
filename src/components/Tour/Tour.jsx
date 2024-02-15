import React from 'react'
import PropTypes from 'prop-types'
import { Tour as ANTComponent } from 'antd'
// import Step from "./Step/Step";

/**
 * @uxpindocurl https://ant.design/components/Tour/
 * @uxpindescription A popup component for guiding users through a product
 * @uxpinuseportal
 */

const Tour = (props) => {
  // Component logic

  return (
    // Your component JSX
    <ANTComponent {...props} />
  )
}

Tour.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,
  /** Get the element the guide card points to. Empty makes it show in center of screen */
  target: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(HTMLElement)]),

  /** Whether to show the arrow, including the configuration whether to point to the center of the element */
  arrow: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({ pointAtCenter: PropTypes.bool })]),

  /** Customize close icon */
  closeIcon: PropTypes.node,

  /** Displayed pictures or videos */
  cover: PropTypes.node,

  /** Title of the step */
  title: PropTypes.node,

  /** Description of the step */
  description: PropTypes.node,

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

  /** Properties of the Next button */
  nextButtonProps: PropTypes.shape({
    children: PropTypes.node,
    onClick: PropTypes.func,
  }),

  /** Properties of the previous button */
  prevButtonProps: PropTypes.shape({
    children: PropTypes.node,
    onClick: PropTypes.func,
  }),

  /** support pass custom scrollIntoView options */
  scrollIntoViewOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object, // ScrollIntoViewOptions
  ]),
}

Tour.defaultProps = {}

// Tour.Step = Step;

export default Tour
