import { ReactNode } from 'react';

export interface PointType {
  x: number;
  y: number;
}

export interface VectorType {
  dx: number;
  dy: number;
}

export interface IScrollbarProps {
  children: ReactNode;
}
