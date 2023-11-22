import { Button, type ButtonProps } from "@mantine/core";
import Image from "next/image";
import { useHover } from "@mantine/hooks";
import useScreen from "~/hooks/isMobile";
import { useQuiz } from "~/providers/QuizProvider";

export interface XButtonProps extends ButtonProps {
  text: string;
  subtext?: string;
  isSelected?: boolean;
}

export default function XButton({
  text,
  subtext,
  isSelected,
  ...props
}: XButtonProps) {
  const { hovered, ref } = useHover();
  const { isMobile } = useScreen();

  const { quizList, currentQuiz, setCurrentQuiz } = useQuiz();

  const handleClick = () => {
    if (currentQuiz < quizList.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };

  return (
    <div
      className={`mb-2 overflow-hidden ${
        isSelected && "border-2 border-beauty-yellow"
      }`}
      ref={ref}
    >
      <Button
        {...props}
        variant="filled"
        radius="xs"
        fullWidth
        size="2xl"
        onClick={handleClick}
        color={hovered ? "#394A62" : "#556479"}
        justify="space-between"
        leftSection={
          <div className="flex flex-row items-center space-x-4 pl-6">
            <div className="w-6">
              <Image
                src={`/assets/x-mark.png`}
                alt="x-mark"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col text-start">
              <div
                className={`mb-2 font-semibold ${
                  isMobile ? "text-base" : "text-lg"
                }`}
              >
                {text}
              </div>
              {subtext && (
                <div className="text-xs font-light tracking-wide">
                  {subtext}
                </div>
              )}
            </div>
          </div>
        }
      />
    </div>
  );
}
