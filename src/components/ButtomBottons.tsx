import ContinueButton, { type ContinueButtonProps } from "./ContinueButton";
import SkipButton from "./SkipButton";
import XButton, { type XButtonProps } from "./XButton";

interface ButtomBottonsProps {
  continueButtonProps?: ContinueButtonProps;
  xButtonProps?: XButtonProps;
}

export default function ButtomBottons({
  continueButtonProps,
  xButtonProps,
}: ButtomBottonsProps) {
  return (
    <div className="flex flex-col space-y-2">
      {xButtonProps && (
        <div>
          <div className="mb-8 mt-6 h-[2px] bg-beauty-grey"></div>
          <XButton {...xButtonProps} />
        </div>
      )}
      <ContinueButton {...continueButtonProps} />
      <SkipButton />
    </div>
  );
}
