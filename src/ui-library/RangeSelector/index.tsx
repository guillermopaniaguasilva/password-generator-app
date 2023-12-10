import { useEffect, useRef } from 'react';
import theme from 'theme/index';
import { Label, LengthLabel, StyledRangeInput } from './syles';

type RangeSelectorProps = {
  charLength: number;
  setCharLength: (charLength: number) => void;
};

const RangeSelector = ({ charLength, setCharLength }: RangeSelectorProps) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      const progress = (charLength / Number(sliderRef.current.max)) * 100;
      sliderRef.current.style.background = `linear-gradient(to right, ${theme.colors.green} ${progress}%, ${theme.colors.black} ${progress}%)`;
    }
  }, [charLength]);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <Label>Character Length</Label>
        <LengthLabel>{charLength}</LengthLabel>
      </div>

      <StyledRangeInput className="range">
        <input
          ref={sliderRef}
          type="range"
          min={0}
          max={20}
          value={charLength}
          className="range-input"
          onChange={(e) => setCharLength(parseInt(e.target.value, 10))}
        />
      </StyledRangeInput>
    </>
  );
};

export default RangeSelector;
