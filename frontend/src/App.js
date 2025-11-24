import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSolve = async () => {
    setLoading(true);
    const res = await axios.post("http://127.0.0.1:8000/solve", {
      question: question
    });
    setAnswer(res.data.answer);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1 className="title">✨ Smart Doubt Solver ✨</h1>
      <p className="subtitle">Ask any question. I will solve it!</p>

      <textarea
        className="input"
        placeholder="Type your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>

      <button className="btn" onClick={handleSolve}>
        {loading ? "Solving..." : "Solve Doubt"}
      </button>

      {answer && (
        <div className="output-box">
          <h3>Solution:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
