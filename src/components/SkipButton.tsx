import { Button, type ButtonProps } from "@mantine/core";
import { useQuiz } from "~/providers/QuizProvider";

export default function SkipButton(props: ButtonProps) {
  const { quizList, currentQuiz, setCurrentQuiz } = useQuiz();

  const handleClick = () => {
    if (currentQuiz < quizList.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };

  return (
    <Button
      {...props}
      variant="outline"
      onClick={handleClick}
      color="#ffffff"
      size="custom-lg"
      radius="xs"
      fullWidth
    >
      <div className="text-lg font-bold tracking-wide">Skip</div>
    </Button>
  );
}
