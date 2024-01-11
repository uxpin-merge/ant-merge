import { PropsWithChildren } from "react";
import { Radio as ANTComponent, RadioProps } from "antd";

interface MergeProps extends RadioProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Radio/
 */
const Radio = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Radio;