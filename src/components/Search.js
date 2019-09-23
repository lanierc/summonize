import React from "react";

function Search(props) {
  return (
    <section className="search">
      <p>Search</p>
      <form onSubmit={props.searchMatches}>
        <fieldset>
          {props.error && (
            <p>
              <span>Error:</span> {props.error}
            </p>
          )}
          <label htmlFor="name">
            Summoner Name:
            <input
              type="text"
              name="name"
              placeholder="Summoner Name"
              value={props.name}
              onChange={props.changeState}
            />
            <button type="submit">Search for Stats</button>
          </label>
        </fieldset>
      </form>
    </section>
  );
}

export default Search;
