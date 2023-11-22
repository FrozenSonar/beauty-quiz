import ButtomBottons from "~/components/ButtomBottons";
import CheckboxCard, {
  type CheckboxCardProps,
} from "~/components/CheckboxCard";
import Header from "~/components/Header";
import { useState } from "react";
import { Checkbox } from "@mantine/core";

export default function QuizTwo() {
  const [value, setValue] = useState<string[]>([]);
  const checkboxList: CheckboxCardProps[] = [
    {
      value: "0",
      text: "Niacinamide",
      subtext:
        "This is a form of vitamin B that supports protein and collagen to promote optimal skin health",
    },
    {
      value: "1",
      text: "Lipid Compound",
      subtext:
        "This improves moisture retention in the skin's barrier for long lasting hydration",
    },
    {
      value: "2",
      text: "Ribose",
      subtext: "This reduces the appearance of thinning, wrinkled skin",
    },
    {
      value: "3",
      text: "Jojoba Leaf Extract",
      subtext:
        "This is rich in antioxidants and helps stimulate the production of collagen",
    },
    {
      value: "4",
      text: "Glycerin",
      subtext: "This helps keep skin hydrated",
    },
  ];
  const disabled = !value.length;
  return (
    <div>
      <Header />
      <div className="mb-8 text-2xl font-semibold tracking-wide">
        What hydrating ingredients are you interested in?
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
      <ButtomBottons
        continueButtonProps={{ disabled }}
        xButtonProps={{ text: "Unsure what my skin needs" }}
      />
    </div>
  );
}
