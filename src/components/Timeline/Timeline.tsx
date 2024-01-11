import { PropsWithChildren } from "react";
import { Timeline as ANTComponent, TimelineProps } from "antd";

interface MergeProps extends TimelineProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Timeline/
 */
const Timeline = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Timeline;