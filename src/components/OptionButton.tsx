import { Button, type ButtonProps } from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import { useQuiz } from "~/providers/QuizProvider";
import useScreen from "~/hooks/isMobile";

export interface OptionButtonProps extends ButtonProps {
  text: string | React.ReactNode;
  endImage?: string;
}

export default function OptionButton({
  text,
  endImage,
  ...props
}: OptionButtonProps) {
  const { hovered, ref } = useHover();
  const { quizList, currentQuiz, setCurrentQuiz } = useQuiz();
  const { isMobile } = useScreen();

  const handleClick = () => {
    if (currentQuiz < quizList.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };

  return (
    <div className={`mb-2 overflow-hidden`} ref={ref}>
      <Button
        {...props}
        variant="filled"
        onClick={handleClick}
        color={hovered ? "#394A62" : "#556479"}
        size="3xl"
        fullWidth
        justify="space-between"
        leftSection={
          <div
            className={`pl-8 text-start ${isMobile ? "text-sm" : "text-lg"}`}
          >
            {text}
          </div>
        }
        rightSection={
          <div className="w-44">
            <Image
              src={`/assets/${endImage}`}
              alt="endImage"
              width={350}
              height={350}
            />
          </div>
        }
      />
    </div>
  );
}
