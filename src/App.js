import React from "react";
import axios from "axios";
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

  searchMatches = async e => {
    e.preventDefault();
    const { name } = this.state;
    let id = null;
    let matches = null;
    this.setState({
      loading: true
    });
    await axios({
      method: "GET",
      url: "/api/summoners",
      params: {
        name
      }
    })
      .then(res => {
        id = res.data.accountId;
      })
      .catch(err => {
        console.log(err);
      });
    await axios({
      method: "GET",
      url: "/api/matches",
      params: {
        id,
        perPage: 5
      }
    })
      .then(res => {
        matches = res.data.matches;
      })
      .catch(err => {
        console.log(err);
      });
    await matches.forEach(async match => {
      await axios({
        method: "GET",
        url: "/api/match",
        params: {
          id: match.gameId
        }
      })
        .then(res => {
          const { participantIdentities } = res.data;
          let participantId = null;
          participantIdentities.forEach(participant => {
            if (participant.player.summonerName === name) {
              participantId = participant.participantId;
            }
          });
          const matchData = res.data.participants[participantId - 1];
          console.log(matchData);
          matchData.forEach((match, index) => {
            matches[index].win = match.stats.win;
            matches[index].kills = match.stats.kills;
            matches[index].deaths = match.stats.deaths;
            matches[index].assists = match.stats.assists;
            matches[index].largestKillingSpree =
              match.stats.largestKillingSpree;
          });
        })
        .catch(err => {
          console.log(err);
        });
    });
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
