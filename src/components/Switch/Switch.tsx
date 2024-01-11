import { PropsWithChildren } from "react";
import { Switch as ANTComponent, SwitchProps } from "antd";

interface MergeProps extends SwitchProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Switch/
 */
const Switch = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Switch;