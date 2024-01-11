import { PropsWithChildren } from "react";
import { Upload as ANTComponent, UploadProps } from "antd";

interface MergeProps extends UploadProps {
  //Add additional prop definitions here
}
/**
 * @uxpindocurl https://ant.design/components/Upload/
 */
const Upload = (props: PropsWithChildren<MergeProps>) => {
  return (
      <ANTComponent {...props}/>
  );
};

export default Upload;