import { PropsWithChildren } from "react";
import { TreeSelect as ANTComponent, TreeSelectProps } from "antd";

interface MergeProps extends TreeSelectProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/TreeSelect/
 */
const TreeSelect = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default TreeSelect;