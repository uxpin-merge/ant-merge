import { PropsWithChildren } from "react";
import { Descriptions as ANTComponent, DescriptionsProps } from "antd";

interface MergeProps extends DescriptionsProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Descriptions/
 */
const Descriptions = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Descriptions;