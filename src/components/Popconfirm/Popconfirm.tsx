import { PropsWithChildren } from "react";
import { Popconfirm as ANTComponent, PopconfirmProps } from "antd";

interface MergeProps extends PopconfirmProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Popconfirm/
 */
const Popconfirm = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Popconfirm;