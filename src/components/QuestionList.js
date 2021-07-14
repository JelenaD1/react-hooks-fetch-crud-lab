import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, setQuestions}) {
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((question) => (
          <QuestionItem key={question.id} questions={questions} question={question} onDeleteQuestion={onDeleteQuestion} setQuestions={setQuestions}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
