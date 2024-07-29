import * as React from 'react'
import Modal from '../Modal'



const defType = 'primary'

const defOpen = false
const defTitle = 'Basic Modal Dialog'
const defClose = true
const defCentered = true
const defMask = true
const defMaskClose = false
const defWidth = 514


export default (
  <Modal
      uxpId="modal-1"
      uxOpen={defOpen}
      title={defTitle}
      okType={defType}
      closable={defClose}
      centered={defCentered}
      mask={defMask}
      maskClosable={defMaskClose}
      width={defWidth}
  >
    Hello
  </Modal>
)
