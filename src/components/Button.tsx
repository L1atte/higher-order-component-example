import { MouseEvent, ReactNode } from 'react';

type ButtonProps = { children: ReactNode; onClick?: (event: MouseEvent<HTMLButtonElement>, content?: unknown) => void };

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return <button onClick={onClick}>{children}</button>;
}

export type { ButtonProps };
export { Button };
