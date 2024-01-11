import { PropsWithChildren } from "react";
import { Carousel as ANTComponent, CarouselProps } from "antd";

interface MergeProps extends CarouselProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Carousel/
 */
const Carousel = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Carousel;