import { PropsWithChildren } from "react";
import { Tag as ANTComponent, TagProps } from "antd";

interface MergeProps extends TagProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Tag/
 */
const Tag = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Tag;