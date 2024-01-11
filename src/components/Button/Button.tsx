
import { ReactNode } from 'react';
import { PropsWithChildren } from "react";
import { Button as ANTComponent, ButtonProps } from "antd";



interface MergeProps extends ButtonProps {
  children?: ReactNode,
}
/**
 * @uxpindocurl https://ant.design/components/Button/
 */
const Button = (props: PropsWithChildren<MergeProps>) => {
  return (
    <ANTComponent {...props} />
  );
};

export default Button;
