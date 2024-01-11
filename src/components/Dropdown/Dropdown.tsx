import { PropsWithChildren } from "react";
import { Dropdown as ANTComponent, DropdownProps } from "antd";

interface MergeProps extends DropdownProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Dropdown/
 */
const Dropdown = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Dropdown;