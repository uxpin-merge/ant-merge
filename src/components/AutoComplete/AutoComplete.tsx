import { PropsWithChildren } from "react";
import { AutoComplete as ANTComponent, AutoCompleteProps } from "antd";

interface MergeProps extends AutoCompleteProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/AutoComplete/
 */
const AutoComplete = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default AutoComplete;