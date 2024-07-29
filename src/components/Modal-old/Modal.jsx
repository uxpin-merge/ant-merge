import React from 'react'
import PropTypes from 'prop-types'
import { Modal as ANTComponent } from 'antd'
import { v4 as uuidv4 } from 'uuid'

/**
 * @uxpindocurl https://ant.design/components/Modal/
 * @uxpindescription Modal dialogs
 * @uxpinuseportal
 */

const Modal = (props) => {
  const id = `drawer-${uuidv4()}`
  const container = `#${id}`

  return (
    // Your component JSX
    <div style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }} className="merge-component">
      <ANTComponent getContainer={container} {...props} />
      <div id={id}></div>
    </div>
  )
}

Modal.propTypes = {
  /** The content of the component. */
  children: PropTypes.node,

  /** Called when modal is closed completely */
  afterClose: PropTypes.func,

  /** Config Modal build-in module's className */
  classNames: PropTypes.shape({
    header: PropTypes.string,
    body: PropTypes.string,
    footer: PropTypes.string,
    mask: PropTypes.string,
    wrapper: PropTypes.string,
  }),

  /** The cancel button props */
  cancelButtonProps: PropTypes.object, // ButtonProps

  /** Text of the Cancel button */
  cancelText: PropTypes.node,

  /** Centered Modal */
  centered: PropTypes.bool,

  /** Custom close icon */
  closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

  /** Loading visual effect for OK button */
  confirmLoading: PropTypes.bool,

  /** Unmount child components on onClose */
  destroyOnClose: PropTypes.bool,

  /** Focus trigger element after dialog is closed */
  focusTriggerAfterClose: PropTypes.bool,

  /** Footer content */
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /** Force render Modal */
  forceRender: PropTypes.bool,

  /** Mounted node for Modal */
  getContainer: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string, PropTypes.bool]),

  /** Support press esc to close */
  keyboard: PropTypes.bool,

  /** Show mask or not */
  mask: PropTypes.bool,

  /** Close modal on mask click */
  maskClosable: PropTypes.bool,

  /** Custom modal content render */
  modalRender: PropTypes.func,

  /** The OK button props */
  okButtonProps: PropTypes.object, // ButtonProps

  /** Text of the OK button */
  okText: PropTypes.node,

  /** Button type of the OK button */
  okType: PropTypes.string,

  /** Style of floating layer */
  style: PropTypes.object, // CSSProperties

  /** Config Modal build-in module's style */
  styles: PropTypes.object,

  /** The modal dialog's title */
  title: PropTypes.node,

  /** Modal dialog visibility
   * @uxpinbind onCancel 0.defaultPrevented
   */
  open: PropTypes.bool,

  /** Width of the modal dialog */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Class name of the container of the modal dialog */
  wrapClassName: PropTypes.string,

  /** The z-index of the Modal */
  zIndex: PropTypes.number,

  /** Called when clicking mask, close button, or Cancel button */
  onCancel: PropTypes.func,

  /** Called when clicking the OK button */
  onOk: PropTypes.func,

  /** Callback for animation end when Modal is opened or closed */
  afterOpenChange: PropTypes.func,
}

Modal.defaultProps = {
  styles: {
    header: {},
    body: {},
    footer: {},
    mask: {},
  },
}

export default Modal
