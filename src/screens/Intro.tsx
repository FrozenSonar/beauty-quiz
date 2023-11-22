"use client";
import { Button } from "@mantine/core";
import Header from "~/components/Header";
import OptionButton, {
  type OptionButtonProps,
} from "~/components/OptionButton";
import useScreen from "~/hooks/isMobile";

export default function Intro() {
  const { isMobile } = useScreen();
  const options: OptionButtonProps[] = [
    {
      text: "Remove Crepey Skin",
      endImage: "intro-crepey-skin.png",
    },
    {
      text: "Relieve Dry, Flaky Skin",
      endImage: "intro-dry-flaky.png",
    },
    {
      text: "Get Firmer, Tighter, Younger Looking Skin",
      endImage: "intro-firmer.png",
    },
  ];

  return isMobile ? (
    <div className="flex flex-col">
      <Header hasProgressBar={false} />
      <div className="x mb-4 font-unna text-5xl">
        Achieve Perfectly <div className="italic">Smooth, Youthful </div> Skin
      </div>
      <div className="mb-4 font-light">
        Get a personalized skin care treatment
      </div>
      <div className="mb-8 text-2xl font-bold tracking-wide">
        Choose Your Goal
      </div>

      <Button.Group orientation="vertical">
        {options.map((option, i) => (
          <OptionButton key={i} {...option} />
        ))}
      </Button.Group>
    </div>
  ) : (
    <div className="flex flex-col justify-center">
      <Header hasProgressBar={false} />

      <div className="grid grid-cols-2">
        <div>
          <div className="mb-4 font-unna text-4xl ">
            Achieve Perfectly <div className="italic">Smooth, Youthful </div>{" "}
            Skin
          </div>
          <div className="font-light">
            Get a personalized skin care treatment
          </div>
        </div>
        <div>
          <div className="mb-8 text-2xl font-bold tracking-wide">
            Choose Your Goal
          </div>

          <Button.Group orientation="vertical">
            {options.map((option, i) => (
              <OptionButton key={i} {...option} />
            ))}
          </Button.Group>
        </div>
      </div>
    </div>
  );
}
