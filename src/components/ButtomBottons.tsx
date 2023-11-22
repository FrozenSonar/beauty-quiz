import ContinueButton, { type ContinueButtonProps } from "./ContinueButton";
import SkipButton from "./SkipButton";

interface ButtomBottonsProps {
  continueButtonProps?: ContinueButtonProps;
}

export default function ButtomBottons({
  continueButtonProps,
}: ButtomBottonsProps) {
  return (
    <div className="flex flex-col space-y-2">
      <ContinueButton {...continueButtonProps} />
      <SkipButton />
    </div>
  );
}
