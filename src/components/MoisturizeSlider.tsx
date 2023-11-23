/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { styled } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";

const marks = [
  { value: 0, label: "1" },
  { value: 1, label: "2" },
  { value: 2, label: "3" },
  { value: 3, label: "4" },
  { value: 4, label: "5" },
  { value: 5, label: "6" },
  { value: 6, label: "7" },
  { value: 7, label: "8" },
  { value: 8, label: "9" },
  { value: 9, label: "10" },
];

interface MoisturizeSliderProps {
  value: number;
  setValue: (value: number) => void;
}

export default function MoisturizeSlider({
  value,
  setValue,
}: MoisturizeSliderProps) {
  return (
    <div className="flex w-full flex-col space-y-3">
      <div className="flex w-full flex-row justify-between">
        <div className="w-1/4 text-start">1</div>
        <div className="w-1/4 text-end">10</div>
      </div>
      <Slider
        aria-label="Moisturize Level Slider"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        value={value}
        onChange={(e, value) => setValue(value as number)}
        min={0}
        max={9}
        slots={{ valueLabel: SliderValueLabel }}
        valueLabelFormat={(value) => marks[value]?.label}
      />

      <div className="flex w-full flex-row justify-between ">
        <div className="w-1/4 text-start text-sm font-light tracking-wider">
          Newcomer
        </div>
        <div className="w-1/4 text-end text-sm font-light tracking-wider">
          Pro
        </div>
      </div>
    </div>
  );
}

interface SliderValueLabelProps {
  children: React.ReactElement;
}

function SliderValueLabel({ children }: SliderValueLabelProps) {
  return (
    <div className="valueLabel">
      <span className="w-full whitespace-nowrap bg-beauty-grey px-2 py-1 font-light tracking-wider text-white">
        {children}
      </span>
      <div className="relative left-[35%] h-2 w-2 -translate-y-[45%] rotate-45 bg-beauty-grey" />
    </div>
  );
}

function valuetext(value: number) {
  return `${value}°C`;
}

const grey = {
  300: "#C7D0DD",
  600: "#6B7A90",
};

const Slider = styled(BaseSlider)(
  ({ theme }) => `
  color: #556479;
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &.${sliderClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === "light" ? grey[300] : grey[600]};
    opacity: 0.5;
  }

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 8px;
    background-color: #556479;
    background-image: linear-gradient(to right, #0b233f , white);
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 8px;
    
  }

  & .${sliderClasses.thumb} {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: -6px;
    margin-top: -6px;
    box-sizing: border-box;
    border: 2px solid #0b233f;
    border-radius: 50%;
    background-color: #e2c47c;
    display: flex;
    flex-direction: column-reverse;
  }

  & .${sliderClasses.mark} {
    position: absolute;
    width: 2px;
    height: 8px;
    background-color: #0b233f;
  }

  & .${sliderClasses.markLabel} {
    display: none
  }

  & .valueLabel {
    font-size: 12px;
    position: relative;
    top: -1.5em;
    text-align: center;
    align-self: center;
  }
`,
);
