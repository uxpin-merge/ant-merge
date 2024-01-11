import { PropsWithChildren } from "react";
import { Input as ANTComponent, InputProps } from "antd";

interface MergeProps extends InputProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Input/
 */
const Input = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Input;