import { PropsWithChildren } from "react";
import { BackTop as ANTComponent, BackTopProps } from "antd";

interface MergeProps extends BackTopProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/BackTop/
 */
const BackTop = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default BackTop;