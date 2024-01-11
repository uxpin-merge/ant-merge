import { PropsWithChildren } from "react";
import { Result as ANTComponent, ResultProps } from "antd";

interface MergeProps extends ResultProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Result/
 */
const Result = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Result;