import ButtomBottons from "~/components/ButtomBottons";
import Header from "~/components/Header";
import Image from "next/image";
import SkinSlider from "~/components/SkinSlider";
import { useState } from "react";
import useScreen from "~/hooks/isMobile";

export default function QuizThree() {
  const [value, setValue] = useState<number>(0);
  const { isMobile } = useScreen();

  const SkinImageList = [
    "/assets/pg-3-normal-d.png",
    "/assets/pg-3-dry-d.png",
    "/assets/pg-3-microwrinkles-d.png",
    "/assets/pg-3-scaly-d.png",
    "/assets/pg-3-itchy-d.png",
    "/assets/pg-3-crepey-d.png",
  ];

  const MobileSkinImageList = [
    "/assets/pg-3-normal-m.jpg",
    "/assets/pg-3-dry-m.jpg",
    "/assets/pg-3-microwrinkles-m.jpg",
    "/assets/pg-3-scaly-m.jpg",
    "/assets/pg-3-itchy-m.jpg",
    "/assets/pg-3-crepey-m.jpg",
  ];

  return (
    <div>
      <Header />
      {isMobile ? (
        <div className="flex w-full flex-col ">
          <div className="mb-8 text-2xl font-semibold tracking-wide">
            How would you describe your skin?
          </div>
          <div className="mb-10 w-full">
            <Image
              src={MobileSkinImageList[value] ?? ""}
              alt="arrow"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <SkinSlider value={value} setValue={setValue} />
            <ButtomBottons />
          </div>
        </div>
      ) : (
        <div className="flex flex-row space-x-12">
          <div className="w-40">
            <Image
              src={SkinImageList[value] ?? ""}
              alt="skin"
              width={500}
              height={700}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="mb-8 text-xl font-semibold tracking-wider">
              How would you describe your skin?
            </div>
            <div className="w-64">
              <SkinSlider value={value} setValue={setValue} />
            </div>
            <ButtomBottons />
          </div>
        </div>
      )}
    </div>
  );
}
