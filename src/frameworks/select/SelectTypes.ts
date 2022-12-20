import { ComponentProps, ElementRef } from 'react';
import { CSS } from '../../../stitches.config';
import SelectRoot from './components/SelectRoot';

export type SelectRef = ElementRef<typeof SelectRoot>;
export type ISelectProps = ComponentProps<typeof SelectRoot> & { css?: CSS };
