import { forwardRef } from 'react';
import SliderTrack from './components/SliderTrack';
import SliderTrackRange from './components/SliderTrackRange';
import SliderThumb from './components/SliderThumb';
import { SliderRoot } from './components/SliderRoot';
import { ISliderProps, SliderRef } from './SliderTypes';

const Slider = forwardRef<SliderRef, ISliderProps>(
  ({ defaultValue = [], value, ...props }, forwardedRef): JSX.Element => {
    const hasRange = Array.isArray(defaultValue || value);
    const thumbsArray = hasRange ? defaultValue || value : [defaultValue || value];

    return (
      <SliderRoot {...{ ...props, defaultValue, value }} ref={forwardedRef}>
        <SliderTrack>
          <SliderTrackRange />
        </SliderTrack>
        {Object.keys(thumbsArray).map((index: string) => (
          <SliderThumb key={index} />
        ))}
      </SliderRoot>
    );
  },
);

Slider.displayName = 'Slider';

export default Slider;
