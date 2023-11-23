import { Button, Progress } from "@mantine/core";
import { useQuiz } from "~/providers/QuizProvider";

export default function CustomProgressBar() {
  const { quizList, currentQuiz, setCurrentQuiz } = useQuiz();

  const current = quizList[currentQuiz]?.quizId ?? 1;
  const max = quizList.filter((quiz) => quiz.quizId).length;

  const value = (current / max) * 100;

  const handleBack = () => {
    if (currentQuiz > 0) {
      setCurrentQuiz(currentQuiz - 1);
    }
  };

  return (
    <div className="flex w-full flex-row items-center space-x-2">
      <Button
        onClick={handleBack}
        size="compact-sm"
        variant="filled"
        radius={0}
        bg="#556479"
      >
        {"<"}
      </Button>
      <div className="w-full">
        <Progress
          bg="#556479"
          size="lg"
          radius={0}
          color="#e2c47c"
          aria-label="Quiz Progress"
          value={value}
        />
      </div>
      <div>
        {current}/{max}
      </div>
    </div>
  );
}
