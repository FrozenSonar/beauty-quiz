import { Slider } from "@mantine/core";

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
    <div className="flex w-full flex-col space-y-4">
      <div className="flex w-full flex-row justify-between ">
        <div className="w-1/4 text-start">1</div>
        <div className="w-1/4 text-end">10</div>
      </div>
      <Slider
        defaultValue={4}
        labelAlwaysOn
        size="lg"
        color="#e2c47c"
        value={value}
        onChange={setValue}
        max={9}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={1}
        marks={marks}
        styles={{
          thumb: { backgroundColor: "#e2c47c", border: 0 },
          track: { color: "#556479", borderRadius: 0 },
          root: { borderRadius: 0 },
          markLabel: { display: "none" },
          label: {
            backgroundColor: "#556479",
            borderRadius: 0,
          },
        }}
      />
      <div className="flex w-full flex-row justify-between ">
        <div className="w-1/4 text-start">Newcomer</div>
        <div className="w-1/4 text-end">Pro</div>
      </div>
    </div>
  );
}
