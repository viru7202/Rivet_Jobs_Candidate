import React, { useState } from "react";
import Navbar from "./Navbar";

function AddQuestion() {
  const [questions, setQuestions] = useState(["", "", ""]); // Default three empty questions

  // Add a new question
  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  // Remove a specific question
  const removeQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  // Update a specific question
  const updateQuestion = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div>
      <Navbar />
      <div className="add-job-img">
        <img src="Group 876.png" alt="Header" />
      </div>
      <div className="main-box-editprofile">
        <div className="add-question">
          <button className="add-question-btn" onClick={addQuestion}>
            + Add Question
          </button>
          {questions.map((question, index) => (
            <div key={index} className="question-item">
              <input
                type="text"
                placeholder="Your Question for candidate is ?"
                value={question}
                onChange={(e) => updateQuestion(index, e.target.value)}
              />
              <button
                className="delete-btn"
                onClick={() => removeQuestion(index)}
              >
            <img src="Vector (9).png" alt=""/>
              </button>
            </div>
          ))}
        </div>

        <div className="edidprofile-buttons">
          <div className="row">
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Back</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="editprofile-button">
                <button>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>

<style jsx>{`

.main-box-editprofile {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.add-question {
  margin-bottom: 20px;
}

.add-question-btn {
  display: inline-block;
  background-color: #1D71B7;
  color: white;
  padding: 12px 12px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  cursor: pointer;
      width: 180px;
}

.question-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.question-item input {
    background: #F5F7FA;
    flex: 1;
    padding: 12px 12px;
    margin-right: 10px;
    border: none;
    margin: 10px 10px;
    border-radius: 4px;
}

.delete-btn {
  background: none;
  border: none;
  color: red;
  font-size: 20px;
  cursor: pointer;
}

.editprofile-buttons {
  margin-top: 20px;
}






 `}</style>

    </div>
  );
}

export default AddQuestion;
