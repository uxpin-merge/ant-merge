import React from 'react'
import PropTypes from 'prop-types'
import { Typography as ANTComponent, Flex } from 'antd'
import { v4 as uuidv4 } from 'uuid'

/**
 * @uxpindocurl https://ant.design/components/typography/
 * @uxpindescription Basic text writing, including headings, body text, lists, and more.
 * @uxpinnamespace Typography
 */
const Title = (props) => {
  const key = uuidv4()

  return (
    <Flex>
      <ANTComponent.Title {...props} key={key} />
    </Flex>
  )
}

Title.propTypes = {
  /** The ID for input */
  id: PropTypes.string,
  /** The content of the Text */
  children: PropTypes.node,
  /** Code style */
  code: PropTypes.bool,

  /** Whether to be copyable. boolean or object. See documentation.*/
  copyable: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  /** Deleted line style */
  delete: PropTypes.bool,

  /** Disabled content */
  disabled: PropTypes.bool,

  /** If editable. boolean or object. See documentation.*/
  editable: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  /** Display ellipsis. boolean or object. See documentation.*/
  ellipsis: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      rows: PropTypes.number,
      expandable: PropTypes.bool,
    }),
  ]),

  /** Set content importance. Match with h1, h2, h3, h4, h5 */
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),

  /** Marked style */
  mark: PropTypes.bool,

  /** Set the handler to handle click event */
  onClick: PropTypes.func,

  /** Italic style */
  italic: PropTypes.bool,

  /** The style properties of the component */
  style: PropTypes.object,

  /** Content type */
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),

  /** Underlined style */
  underline: PropTypes.bool,
}

Title.defaultProps = {}

export default Title
