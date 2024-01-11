import { PropsWithChildren } from "react";
import { Card as ANTComponent, CardProps } from "antd";

interface MergeProps extends CardProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Card/
 */
const Card = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Card;