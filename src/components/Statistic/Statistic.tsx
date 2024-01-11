import { PropsWithChildren } from "react";
import { Statistic as ANTComponent, StatisticProps } from "antd";

interface MergeProps extends StatisticProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Statistic/
 */
const Statistic = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Statistic;