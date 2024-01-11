import { PropsWithChildren } from "react";
import { Breadcrumb as ANTComponent, BreadcrumbProps } from "antd";

interface MergeProps extends BreadcrumbProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Breadcrumb/
 */
const Breadcrumb = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Breadcrumb;