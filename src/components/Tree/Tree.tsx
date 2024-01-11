import { PropsWithChildren } from "react";
import { Tree as ANTComponent, TreeProps } from "antd";

interface MergeProps extends TreeProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Tree/
 */
const Tree = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Tree;