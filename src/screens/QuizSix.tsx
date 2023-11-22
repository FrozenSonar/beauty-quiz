import ButtomBottons from "~/components/ButtomBottons";
import CheckboxCard, {
  type CheckboxCardProps,
} from "~/components/CheckboxCard";
import Header from "~/components/Header";
import { useState } from "react";
import { Checkbox } from "@mantine/core";
import ThanksForSharing from "~/components/ThanksForSharing";

export default function QuizSix() {
  const [value, setValue] = useState<string[]>([]);
  const checkboxList: CheckboxCardProps[] = [
    {
      value: "0",
      text: "Overwhelmed, too many products to keep track of",
    },
    {
      value: "1",
      text: "Overcomplicated, hard to understand ingredients",
    },
    {
      value: "2",
      text: "Hopelessness",
    },
    {
      value: "3",
      text: "No Results",
    },
    {
      value: "4",
      text: "Anxiety",
    },
  ];

  const disabled = !value.length;

  return (
    <div className="">
      <Header />
      <div className="mb-8 text-2xl font-semibold tracking-wide">
        Have you experienced any of these issues in your previous skincare
        attempts?
      </div>
      <Checkbox.Group value={value} onChange={setValue}>
        {checkboxList.map((option, i) => (
          <CheckboxCard
            key={i}
            isSelected={value.includes(i.toString())}
            {...option}
          />
        ))}
      </Checkbox.Group>
      <ButtomBottons continueButtonProps={{ disabled }} />
      {!disabled && <ThanksForSharing />}
    </div>
  );
}
