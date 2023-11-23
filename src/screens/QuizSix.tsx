import ButtomBottons from "~/components/ButtomBottons";
import CheckboxCard, {
  type CheckboxCardProps,
} from "~/components/CheckboxCard";
import Header from "~/components/Header";
import { useState } from "react";
import ThanksForSharing from "~/components/ThanksForSharing";
import useScreen from "~/hooks/isMobile";

export default function QuizSix() {
  const [value, setValue] = useState<string[]>([]);
  const { isMobile } = useScreen();
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

  const handleChecked = (valueParam: string) => {
    if (value.includes(valueParam)) {
      const removeValue = value.filter((v) => v !== valueParam);
      setValue(removeValue);
    } else {
      setValue([...value, valueParam]);
    }
  };
  return (
    <div className={!isMobile ? "w-[40rem]" : ""}>
      <Header />
      <div className="mb-8 text-2xl font-semibold tracking-wide">
        Have you experienced any of these issues in your previous skincare
        attempts?
      </div>

      {checkboxList.map((option, i) => (
        <CheckboxCard
          {...option}
          key={i}
          checked={value.includes(i.toString())}
          setChecked={() => handleChecked(i.toString())}
        />
      ))}

      <ButtomBottons
        continueButtonProps={{ disabled }}
        xButtonProps={{ text: "None of the Above" }}
      />
      {!disabled && <ThanksForSharing />}
    </div>
  );
}
