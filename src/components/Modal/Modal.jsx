import React from "react"
import PropTypes from 'prop-types'
//import { Modal as ANTComponent } from 'antd'
//import { v4 as uuidv4 } from 'uuid'



const small = 'small'
const medium = 'medium'
const large = 'large'

const getWidthFromSize = (width) => {
  switch (width) {
    case small:
      return 340;
    case medium:
      return 680;
    case large:
      return 1020;
  }
}



/**
 * @uxpindocurl https://ant.design/components/Modal/
 * @uxpindescription Modal Dialog
 * @uxpinuseportal
 * @uxpincomponent
 */
class Modal extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  set() {
    this.setState({
      isOpen: this.props.uxOpen,
    })
  }

  componentDidMount() {
    this.set()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.uxOpen !== this.props.uxOpen)
    {
      this.set()
    }
  }

  render() {

    //const id = `modal-${uuidv4()}`
    //const container = `#${id}`

    //console.log("ID: " + id + " show: " + this.props.uxOpen)

    return (
      <div>
          <br />
          <em>
            <strong>Dialog:</strong>
          </em>
          <br />
          Move this marker offscreen
      </div>
    )
  }
}


Modal.propTypes = {

  /** The content of the component.
   * @uxpinignoreprop
  */
  children: PropTypes.node,

  /** Modal dialog visibility
   * onCancel 0.defaultPrevented
   * @uxpinbind afterOpenChange
   * @uxpindescription Whether to display the dialog.
   * @uxpinpropname Open
   */
  uxOpen: PropTypes.bool,

  /** The modal dialog's title
   * @uxpindescription The dialog title
   * @uxpinpropname Title
   */
  title: PropTypes.string,

  /** Text of the OK button
   * @uxpindescription Text to display on the OK button
   * @uxpinpropname OK Button Text
  */
  okText: PropTypes.string,

  /** Button type of the OK button
   * @uxpindescription Whether the OK Button should be rendered in a Negative (red) style.
   * @uxpinpropname OK Button Negative
  */
  okType: PropTypes.string,

  /** Text of the Cancel button
   * @uxpindescription Text to display on the Cancel button
   * @uxpinpropname Cancel Button Text
  */
  cancelText: PropTypes.string,

  /** Closable
   * @uxpindescription If true, the "X" Close button will be rendered.
   * @uxpinpropname Closable
  */
  closable: PropTypes.bool,

  /** Centered Modal
   * @uxpindescription Whether to display the dialog centered in the view.
   * @uxpinpropname Centerd
  */
  centered: PropTypes.bool,

  /** Width of the modal dialog
   * @uxpindescription Enter a number for how wide the dialog should be in pixels.
   * @uxpinpropname Width
  */
  width: PropTypes.number,

  /** Width of the modal dialog
   * @uxpindescription Dialog width
   * @uxpinpropname Width t-shirt size
  */
  uxWidth: PropTypes.oneOf([small, medium, large]),

  /** Loading visual effect for OK button
   * @uxpindescription When true, the OK button renders in its "Loading" style.
   * @uxpinpropname OK Button Loading
  */
  confirmLoading: PropTypes.bool,

  /** Show mask or not
   * @uxpindescription Whether to show the mask.
   * @uxpinpropname Show Mask
  */
  mask: PropTypes.bool,

  /** Close modal on mask click
   * @uxpindescription Whether clicking on the Mask should close the dialog.
   * @uxpinpropname Mask Closable
  */
  maskClosable: PropTypes.bool,

  /** Called when clicking mask, close button, or Cancel button
   * @uxpindescription Called when clicking mask, close button, or Cancel button to dismiss the dialog.
   * @uxpinpropname On Dismiss
  */
  onCancel: PropTypes.func,

  /** Called when clicking the OK button
   * @uxpindescription Called when the OK Button is clicked.
   * @uxpinpropname On OK Clicked
  */
  onOk: PropTypes.func,

  /** Callback for animation end when Modal is opened or closed
   * @uxpindescription Called when the dialog is shown or hidden.
   * @uxpinpropname * On Show Changed
  */
  afterOpenChange: PropTypes.func,

  // /** Called when modal is closed completely */
  // //afterClose: PropTypes.func,

  // /** Config Modal build-in module's className */
  // // classNames: PropTypes.shape({
  // //   header: PropTypes.string,
  // //   body: PropTypes.string,
  // //   footer: PropTypes.string,
  // //   mask: PropTypes.string,
  // //   wrapper: PropTypes.string,
  // // }),

  // /** The cancel button props */
  // //cancelButtonProps: PropTypes.object, // ButtonProps

  // /** Custom close icon */
  // //closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

  // /** Unmount child components on onClose */
  // //destroyOnClose: PropTypes.bool,

  // /** Focus trigger element after dialog is closed */
  // //focusTriggerAfterClose: PropTypes.bool,

  // /** Footer content */
  // //footer: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  // /** Force render Modal */
  // //forceRender: PropTypes.bool,

  // /** Mounted node for Modal */
  // //getContainer: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string, PropTypes.bool]),

  // /** Support press esc to close */
  // //keyboard: PropTypes.bool,

  // /** Custom modal content render */
  // //modalRender: PropTypes.func,

  // /** The OK button props */
  // //okButtonProps: PropTypes.object, // ButtonProps

  // /** Style of floating layer */
  // //style: PropTypes.object, // CSSProperties

  // /** Config Modal build-in module's style */
  // //styles: PropTypes.object,

  // /** Class name of the container of the modal dialog */
  // //wrapClassName: PropTypes.string,

  // /** The z-index of the Modal */
  // //zIndex: PropTypes.number,

}


Modal.defaultProps = {}



export default Modal

