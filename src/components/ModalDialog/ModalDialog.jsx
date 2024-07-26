import React from 'react'
import PropTypes from 'prop-types'

/**
 * @uxpindocurl https://ant.design/components/Modal/
 * @uxpindescription Modal Dialog
 * @uxpinuseportal
 * @uxpincomponent
 */
class ModalDialog extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  set() {
    this.setState({
      isOpen: this.props.open,
    })
  }

  componentDidMount() {
    this.set()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.set()
    }
  }

  render() {
    return (
      <div>
        <div //A visual aid for the designer to see in UXPin
          style={{
            width: '150px',
            height: '150px',
            color: 'white',
            textAlign: 'center',
            verticalAlign: 'middle',
            background: 'purple',
            borderRadius: 10,
          }}
        >
          <br />
          <em>
            <strong>Dialog:</strong>
          </em>
          <br />
          Move this marker offscreen
        </div>
      </div>
    )
  }
}

ModalDialog.propTypes = {
  /** The content of the component.
   *
   */
  children: PropTypes.node,

  /** Modal dialog visibility
   * onCancel 0.defaultPrevented
   * @uxpinbind afterOpenChange
   * @uxpindescription Whether to display the dialog.
   *
   */
  open: PropTypes.bool,

  afterOpenChange: PropTypes.func,
}

ModalDialog.defaultProps = {}

export default ModalDialog
