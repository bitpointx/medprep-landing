import React from "react";
import QNinputData from "./QnInputData";
import { QuestionsAns } from "./QuestionSheetData";

interface NormalQuestionProps {
  item: QuestionsAns;
  index: number;
}
const NormalQuestion: React.FC<NormalQuestionProps> = ({
  item,
  index,
}): JSX.Element => {
  return (
    <QNinputData
      index={index}
      questionId={item.id}
      textQuestion={item.question.textQuestion}
      selectedAnswer={item.selectedAnswer}
      optionA={item.question.optionA}
      optionB={item.question.optionB}
      optionC={item.question.optionC}
      optionD={item.question.optionD}
    />
  );
};
export default NormalQuestion;
