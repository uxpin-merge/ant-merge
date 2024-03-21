import React from 'react'
import PropTypes from 'prop-types'
import { Typography as ANTComponent, Flex } from 'antd'
import Link from './Link/Link'
import Text from './Text/Text'
import Title from './Title/Title'
import Paragraph from './Paragraph/Paragraph'
import { v4 as uuidv4 } from 'uuid'

/**
 * @uxpindocurl https://ant.design/components/Typography/
 * @uxpindescription Basic text writing, including headings, body text, lists, and more.
 */

const Typography = (props) => {
  // Component logic
  const key = uuidv4()
  return (
    <Flex>
      <ANTComponent {...props} key={key}>
        {props.children}
      </ANTComponent>
    </Flex>
  )
}

Typography.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** The style properties of the component */
  style: PropTypes.object,
}

Typography.defaultProps = {}
Typography.Link = Link
Typography.Text = Text
Typography.Title = Title
Typography.Paragraph = Paragraph

export default Typography
