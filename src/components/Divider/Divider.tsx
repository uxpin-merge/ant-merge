import { PropsWithChildren } from "react";
import { Divider as ANTComponent, DividerProps } from "antd";

interface MergeProps extends DividerProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Divider/
 */
const Divider = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Divider;