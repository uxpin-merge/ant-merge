import { PropsWithChildren } from "react";
import { Avatar as ANTComponent, AvatarProps } from "antd";

interface MergeProps extends AvatarProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Avatar/
 */
const Avatar = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Avatar;