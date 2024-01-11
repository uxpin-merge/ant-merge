import { PropsWithChildren } from "react";
import { Tabs as ANTComponent, TabsProps } from "antd";

interface MergeProps extends TabsProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Tabs/
 */
const Tabs = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Tabs;