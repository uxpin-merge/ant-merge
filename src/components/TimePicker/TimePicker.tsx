import { PropsWithChildren } from "react";
import { TimePicker as ANTComponent, TimePickerProps } from "antd";

interface MergeProps extends TimePickerProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/TimePicker/
 */
const TimePicker = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default TimePicker;