import { PropsWithChildren } from "react";
import { Popover as ANTComponent, PopoverProps } from "antd";

interface MergeProps extends PopoverProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Popover/
 */
const Popover = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Popover;