import { PropsWithChildren } from "react";
import { Checkbox as ANTComponent, CheckboxProps } from "antd";

interface MergeProps extends CheckboxProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 */
const Checkbox = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Checkbox;