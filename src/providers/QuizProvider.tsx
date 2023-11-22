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

interface QuizContextProps {
  currentQuiz: number;
  setCurrentQuiz: (quiz: number) => void;
  quizList: JSX.Element[];
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
    <Intro />,
    <QuizOne />,
    <QuizTwo />,
    <QuizThree />,
    <Halfway />,
    <QuizFour />,
    <QuizFive />,
    <QuizSix />,
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
