import { PropsWithChildren } from "react";
import { Empty as ANTComponent, EmptyProps } from "antd";

interface MergeProps extends EmptyProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Empty/
 */
const Empty = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Empty;