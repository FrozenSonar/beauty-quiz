import { useState } from "react";
import ButtomBottons from "~/components/ButtomBottons";
import Header from "~/components/Header";
import MoisturizeLevel from "~/components/MoisturizeLevel";
import MoisturizeSlider from "~/components/MoisturizeSlider";
import useScreen from "~/hooks/isMobile";

export default function QuizFour() {
  const [value, setValue] = useState<number>(4);
  const { isMobile } = useScreen();

  return (
    <div>
      <Header />
      <div className={`flex flex-row space-x-8 ${isMobile ? "w-72" : "w-96"}`}>
        <div className="flex flex-col justify-center space-y-4">
          <div className="mb-4 text-2xl font-semibold tracking-wide">
            How often do you moisturize your skin?
          </div>
          <div>Choose your current level to align with your routine:</div>
          <MoisturizeSlider value={value} setValue={setValue} />
          <MoisturizeLevel level={value} />
          <ButtomBottons />
        </div>
      </div>
    </div>
  );
}
