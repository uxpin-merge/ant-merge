import { PropsWithChildren } from "react";
import { Pagination as ANTComponent, PaginationProps } from "antd";

interface MergeProps extends PaginationProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Pagination/
 */
const Pagination = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Pagination;