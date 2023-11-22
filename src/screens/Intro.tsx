"use client";
import { Button } from "@mantine/core";
import Header from "~/components/Header";
import OptionButton, {
  type OptionButtonProps,
} from "~/components/OptionButton";

export default function Intro() {
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

  return (
    <div>
      <Header hasProgressBar={false} />
      <div className="font-unna text-3xl font-bold">
        Achieve Perfect Smooth, Youthful Skin
      </div>
      <div className="mb-4">Get a personalized skin care treatment</div>
      <div className="mb-8 text-2xl font-bold tracking-wide">
        Choose Your Goal
      </div>

      <Button.Group orientation="vertical">
        {options.map((option, i) => (
          <OptionButton key={i} {...option} />
        ))}
      </Button.Group>
    </div>
  );
}
