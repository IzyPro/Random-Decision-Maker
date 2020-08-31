import React from "react";
import logo from "./move.svg";
import "./App.css";
import Result from "./Result";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
    };
  }

  getItem(item, type) {
    let itemValue = item.target.value;
    switch (type) {
      case "question": {
        this.setState({ question: itemValue });
        break;
      }
      case "answer1": {
        this.setState({ answer1: itemValue });
        break;
      }
      case "answer2": {
        this.setState({ answer2: itemValue });
        break;
      }
      case "answer3": {
        this.setState({ answer3: itemValue });
        break;
      }
      case "answer4": {
        this.setState({ answer4: itemValue });
        break;
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <body className="App">
          <header className="body">
            <div className="brand">
              <img src={logo} className="App-logo" alt="logo" />
              <h3 className="LogoText">Decision Maker</h3>
            </div>
            <p style={{ color: "#00000f" }}>Your answer will appear here</p>
          </header>

          <Route
            exact
            path="/Result"
            render={(props) => (
              <Result
                {...props}
                question={this.state.question}
                answer1={this.state.answer1}
                answer2={this.state.answer2}
                answer3={this.state.answer3}
                answer4={this.state.answer4}
              />
            )}
          />
          <body>
            <div className="contentBody">
              <p>
                Let us help you make those decisions that seem too difficult
                with our random decision maker algorithm.
              </p>
              <div className="inputs">
                <h4>Question</h4>
                <input
                  className="questionInput"
                  type="text"
                  placeholder="Enter your question here"
                  onChange={(item) => this.getItem(item, "question")}
                />

                <h4>Options</h4>
                <input
                  type="text"
                  placeholder="A"
                  onChange={(item) => this.getItem(item, "answer1")}
                />
                <input
                  type="text"
                  placeholder="B"
                  onChange={(item) => this.getItem(item, "answer2")}
                />
                <input
                  type="text"
                  placeholder="C"
                  onChange={(item) => this.getItem(item, "answer3")}
                />
                <input
                  type="text"
                  placeholder="D"
                  onChange={(item) => this.getItem(item, "answer4")}
                />
                <br />
                <br />
                <br />
                <button type="button" title="Submit">
                  <Link
                    to="/Result"
                    style={({ textDecoration: "none" }, { color: "#282c34" })}
                  >
                    Submit
                  </Link>
                </button>
              </div>
            </div>
          </body>
        </body>
      </BrowserRouter>
    );
  }
}

export default App;
