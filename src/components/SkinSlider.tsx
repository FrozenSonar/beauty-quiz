import { Slider } from "@mantine/core";

const marks = [
  { value: 0, label: "Normal Skin" },
  { value: 1, label: "Dry Skin" },
  { value: 2, label: "Microwrinkles" },
  { value: 3, label: "Scaly, Rough Skin" },
  { value: 4, label: "Itchy, Irritated Skin" },
  { value: 5, label: "Crepey Skin" },
];

interface SkinSliderProps {
  value: number;
  setValue: (value: number) => void;
}

export default function SkinSlider({ value, setValue }: SkinSliderProps) {
  return (
    <div className="flex w-full flex-col">
      <Slider
        defaultValue={0}
        labelAlwaysOn
        size="lg"
        color="#e2c47c"
        value={value}
        onChange={setValue}
        max={5}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={1}
        marks={marks}
        styles={{
          markLabel: { display: "none" },
          label: { backgroundColor: "#556479", borderRadius: 0 },
        }}
      />
      <div className="flex w-full flex-row justify-between ">
        <div className="w-1/4 text-start">Normal Skin</div>
        <div className="w-1/4 text-end">Crepey Skin</div>
      </div>
    </div>
  );
}
