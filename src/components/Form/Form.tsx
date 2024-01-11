import { PropsWithChildren } from "react";
import { Form as ANTComponent, FormProps } from "antd";

interface MergeProps extends FormProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Form/
 */
const Form = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Form;