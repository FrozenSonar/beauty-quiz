/* eslint-disable react/jsx-key */
import {
  type PropsWithChildren,
  createContext,
  useState,
  useContext,
} from "react";
import Halfway from "~/screens/Halfway";
import Intro from "~/screens/Intro";
import QuizFive from "~/screens/QuizFive";
import QuizFour from "~/screens/QuizFour";
import QuizOne from "~/screens/QuizOne";
import QuizSix from "~/screens/QuizSix";
import QuizThree from "~/screens/QuizThree";
import QuizTwo from "~/screens/QuizTwo";

interface QuizListMap {
  quizId?: number;
  quiz: JSX.Element;
}
interface QuizContextProps {
  currentQuiz: number;
  setCurrentQuiz: (quiz: number) => void;
  quizList: QuizListMap[];
}

const QuizContext = createContext<QuizContextProps>({
  currentQuiz: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentQuiz: () => {},
  quizList: [],
});

export default function QuizProvider({ children }: PropsWithChildren) {
  const [currentQuiz, setCurrentQuiz] = useState<number>(0);

  const quizList = [
    { quiz: <Intro /> },
    { quizId: 1, quiz: <QuizOne /> },
    { quizId: 2, quiz: <QuizTwo /> },
    { quizId: 3, quiz: <QuizThree /> },
    { quiz: <Halfway /> },
    { quizId: 4, quiz: <QuizFour /> },
    { quizId: 5, quiz: <QuizFive /> },
    { quizId: 6, quiz: <QuizSix /> },
  ];
  return (
    <QuizContext.Provider value={{ currentQuiz, setCurrentQuiz, quizList }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const quiz = useContext(QuizContext);
  return quiz;
}
