import { PropsWithChildren } from "react";
import { Modal as ANTComponent, ModalProps } from "antd";

interface MergeProps extends ModalProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Modal/
 */
const Modal = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Modal;