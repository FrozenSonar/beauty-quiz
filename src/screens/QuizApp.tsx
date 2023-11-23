/* eslint-disable react/jsx-key */
"use client";
import useScreen from "~/hooks/isMobile";
import { useQuiz } from "~/providers/QuizProvider";

export default function QuizApp() {
  const { isMobile } = useScreen();
  const { currentQuiz, quizList } = useQuiz();

  return !isMobile ? (
    <div className={`flex flex-col px-8`}>{quizList[currentQuiz]?.quiz}</div>
  ) : (
    <div className={`mx-6 flex flex-col`}>{quizList[currentQuiz]?.quiz}</div>
  );
}
