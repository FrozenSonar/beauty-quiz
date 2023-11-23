import { Checkbox } from "@mantine/core";
import { useState } from "react";
import ButtomBottons from "~/components/ButtomBottons";
import CheckboxCard, {
  type CheckboxCardProps,
} from "~/components/CheckboxCard";
import Header from "~/components/Header";

export default function QuizOne() {
  const [value, setValue] = useState<string[]>([]);

  const checkboxList: CheckboxCardProps[] = [
    {
      value: "0",
      text: "Loose skin on thighs and legs",
      endImage: "pg-1-thighs.png",
    },
    {
      value: "1",
      text: "Thinning skin on arms",
      endImage: "pg-1-thin-arms.png",
    },
    {
      value: "2",
      text: "Loose neck/jaw",
      endImage: "pg-1-loose-neck.png",
    },
    {
      value: "3",
      text: "Saggy belly",
      endImage: "pg-1-saggy-belly.png",
    },
  ];

  const disabled = !value.length;

  return (
    <div>
      <Header />
      <div className="mb-8 text-2xl font-semibold tracking-wide">
        Select problem areas
      </div>
      <Checkbox.Group value={value} onChange={setValue}>
        {checkboxList.map((option, i) => (
          <CheckboxCard
            {...option}
            key={i}
            isSelected={value.includes(i.toString())}
          />
        ))}
      </Checkbox.Group>
      <ButtomBottons continueButtonProps={{ disabled }} />
    </div>
  );
}
