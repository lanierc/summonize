import React from "react";
import Search from "./components/Search";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
    success: false,
    loading: false,
    error: null,
    matches: null
  };

  changeState = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  searchMatches = e => {
    e.preventDefault();
    console.log("searching");
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Summonize</h1>
        </header>
        <main>
          <Search
            name={this.state.name}
            changeState={this.changeState}
            error={this.state.error}
            searchMatches={this.searchMatches}
          />
        </main>
      </div>
    );
  }
}

export default App;
