import { PropsWithChildren } from "react";
import { Layout as ANTComponent, LayoutProps } from "antd";

interface MergeProps extends LayoutProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Layout/
 */
const Layout = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Layout;