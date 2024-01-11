import { PropsWithChildren } from "react";
import { InputNumber as ANTComponent, InputNumberProps } from "antd";

interface MergeProps extends InputNumberProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/InputNumber/
 */
const InputNumber = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default InputNumber;