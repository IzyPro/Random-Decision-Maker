import React from "react";
import "./Result.css";
import "./App";
import { Link, Route, BrowserRouter } from "react-router-dom";

class Result extends React.Component {
  render() {
    var questionsArray = [];
    questionsArray = { question: this.props.question };
    var Answer = Math.floor(Math.random() * 4);

    return (
      <BrowserRouter>
        <div className="Solution">
          <label>Question</label>
          <h5>{this.props.question}</h5>
          <label>Options</label>
          <p style={{ color: Answer === 0 ? "Green" : "Red" }}>
            {this.props.answer1}
          </p>
          <p style={{ color: Answer === 1 ? "Green" : "Red" }}>
            {this.props.answer2}
          </p>
          <p style={{ color: Answer === 2 ? "Green" : "Red" }}>
            {this.props.answer3}
          </p>
          <p style={{ color: Answer === 3 ? "Green" : "Red" }}>
            {this.props.answer4}
          </p>

          <Link
            to="/"
            style={({ textDecoration: "none" }, { color: "#282c34" })}
          >
            Refresh
          </Link>
        </div>
        <Route exact path="/" />
      </BrowserRouter>
    );
  }
}
export default Result;
