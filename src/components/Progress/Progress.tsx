import { PropsWithChildren } from "react";
import { Progress as ANTComponent, ProgressProps } from "antd";

interface MergeProps extends ProgressProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Progress/
 */
const Progress = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Progress;