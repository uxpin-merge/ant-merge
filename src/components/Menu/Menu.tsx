import { PropsWithChildren } from "react";
import { Menu as ANTComponent, MenuProps } from "antd";

interface MergeProps extends MenuProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Menu/
 */
const Menu = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Menu;