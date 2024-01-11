import { PropsWithChildren } from "react";
import { Collapse as ANTComponent, CollapseProps } from "antd";

interface MergeProps extends CollapseProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Collapse/
 */
const Collapse = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Collapse;