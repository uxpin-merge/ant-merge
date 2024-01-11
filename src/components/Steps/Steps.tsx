import { PropsWithChildren } from "react";
import { Steps as ANTComponent, StepsProps } from "antd";

interface MergeProps extends StepsProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Steps/
 */
const Steps = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Steps;