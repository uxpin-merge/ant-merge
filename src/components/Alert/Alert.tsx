import { PropsWithChildren } from "react";
import { Alert as ANTComponent, AlertProps } from "antd";

interface MergeProps extends AlertProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Alert/
 */
const Alert = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Alert;