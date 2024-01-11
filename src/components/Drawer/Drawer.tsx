import { PropsWithChildren } from "react";
import { Drawer as ANTComponent, DrawerProps } from "antd";

interface MergeProps extends DrawerProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Drawer/
 */
const Drawer = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Drawer;