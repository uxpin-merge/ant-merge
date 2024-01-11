import { PropsWithChildren } from "react";
import { Select as ANTComponent, SelectProps } from "antd";

interface MergeProps extends SelectProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Select/
 */
const Select = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Select;