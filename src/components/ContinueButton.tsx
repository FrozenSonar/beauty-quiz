import { Button, type ButtonProps } from "@mantine/core";
import Image from "next/image";
import { useQuiz } from "~/providers/QuizProvider";

export interface ContinueButtonProps extends ButtonProps {
  isGotIt?: boolean;
}

export default function ContinueButton({
  isGotIt,
  ...props
}: ContinueButtonProps) {
  const { quizList, currentQuiz, setCurrentQuiz } = useQuiz();

  const handleClick = () => {
    if (currentQuiz < quizList.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };

  return (
    <Button
      {...props}
      variant="filled"
      justify="space-between"
      className="disabled:bg-[#8d8465]"
      onClick={handleClick}
      bg="#e2c47c"
      size="custom-lg"
      radius="xs"
      fullWidth
      leftSection={
        <div className="text-lg font-bold tracking-wide text-beauty-blue">
          {isGotIt ? "Got it" : "Continue"}
        </div>
      }
      rightSection={
        <Image src="/assets/arrow.png" alt="arrow" width={24} height={24} />
      }
    />
  );
}
