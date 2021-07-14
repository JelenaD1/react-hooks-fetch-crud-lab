import React from "react";

function QuestionItem({ questions, question, onDeleteQuestion, setQuestions}) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${id}` , {
      method: "DELETE"
    })
    onDeleteQuestion(id)
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleChangeAnswer = (event) => {
    //make a patch request to database updating object
    // update the questions state to show the correct answer
    //alert the user it worked
    const configObject =  {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ correctIndex: parseInt(event.target.value)})
    }
    fetch (`http://localhost:4000/questions/${id}`, configObject)
     .then(resp => resp.json())
     .then(data => {
       const updateQuestion = questions.map(question => {
         if (question.id === data.id) {
           return data
         } else {
           return question
         }
       })
       setQuestions(updateQuestion)
     })

  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChangeAnswer}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
