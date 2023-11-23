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

  const handleChecked = (valueParam: string) => {
    if (value.includes(valueParam)) {
      const removeValue = value.filter((v) => v !== valueParam);
      setValue(removeValue);
    } else {
      setValue([...value, valueParam]);
    }
  };

  return (
    <div>
      <Header />
      <div className="mb-8 text-2xl font-semibold tracking-wide">
        Select problem areas
      </div>
      {checkboxList.map((option, i) => (
        <CheckboxCard
          {...option}
          key={i}
          checked={value.includes(i.toString())}
          setChecked={() => handleChecked(i.toString())}
        />
      ))}

      <ButtomBottons continueButtonProps={{ disabled }} />
    </div>
  );
}
