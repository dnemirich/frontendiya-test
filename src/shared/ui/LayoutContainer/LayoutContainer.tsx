import s from './layoutContainer.module.scss';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const LayoutContainer = ({ children, className }: Props) => {
  return <div className={`${s.container} ${className || ''}`}>{children}</div>;
};
