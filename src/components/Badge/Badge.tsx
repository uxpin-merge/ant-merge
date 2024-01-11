import { PropsWithChildren } from "react";
import { Badge as ANTComponent, BadgeProps } from "antd";

interface MergeProps extends BadgeProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Badge/
 */
const Badge = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Badge;