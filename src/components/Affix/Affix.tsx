import { PropsWithChildren } from "react";
import { Affix as ANTComponent, AffixProps } from "antd";

interface MergeProps extends AffixProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Affix/
 */
const Affix = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Affix;