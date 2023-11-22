/* eslint-disable react/jsx-key */
"use client";
import useScreen from "~/hooks/isMobile";
import { useQuiz } from "~/providers/QuizProvider";

export default function QuizApp() {
  const { isMobile } = useScreen();
  const { currentQuiz, quizList } = useQuiz();

  return !isMobile ? (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className={`col-span-8 flex flex-col`}>{quizList[currentQuiz]}</div>
      <div className="col-span-2"></div>
    </div>
  ) : (
    <div className={`mx-6 flex flex-col`}>{quizList[currentQuiz]}</div>
  );
}
