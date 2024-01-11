import { PropsWithChildren } from "react";
import { Anchor as ANTComponent, AnchorProps } from "antd";

interface MergeProps extends AnchorProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Anchor/
 */
const Anchor = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Anchor;