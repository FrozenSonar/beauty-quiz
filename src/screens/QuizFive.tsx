import { useState } from "react";
import ButtomBottons from "~/components/ButtomBottons";
import Header from "~/components/Header";
import RadioCard, { type RadioCardProps } from "~/components/RadioCard";
import useScreen from "~/hooks/isMobile";

export default function QuizFive() {
  const [checked, setChecked] = useState<number>();
  const { isMobile } = useScreen();

  const radioList: RadioCardProps[] = [
    {
      text: "10 Minutes",
    },
    {
      text: "30 Minutes",
    },
    {
      text: "1 hour",
    },
    {
      text: "5 Minutes",
    },
  ];

  return (
    <div>
      <Header
        alignment={isMobile ? "place-items-center" : "place-items-start"}
      />
      <div className="mb-8 text-2xl font-semibold tracking-wide">
        How much time do you spend on body care daily:
      </div>

      {radioList.map((option, i) => (
        <RadioCard
          key={i}
          checked={checked === i}
          setChecked={() => setChecked(i)}
          {...option}
        />
      ))}

      <ButtomBottons />
    </div>
  );
}
