import { PropsWithChildren } from "react";
import { Spin as ANTComponent, SpinProps } from "antd";

interface MergeProps extends SpinProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Spin/
 */
const Spin = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Spin;