import { MouseEvent } from 'react';

import { ButtonProps } from '../components/Button';

export function withLogger(Component: (props: ButtonProps) => JSX.Element) {
  return (props: ButtonProps & { content: unknown }): JSX.Element => {
    function onClick(event: MouseEvent<HTMLButtonElement>) {
      console.log("log", props.content);

      props?.onClick && props.onClick(event);
    }
    return <Component onClick={onClick}>{props.children}</Component>;
  };
}
