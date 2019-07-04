import React from 'react';
import { connect } from 'react-redux';

import app from './app.module.scss';
import * as utils from './lib/utils.js';
import * as actions from './lib/actions';

const mapStoreStateToProps = state => ({
  person: state.person,
  people: state.people,
});

const mapDispatchToProps = dispatch => ({
  setPeople: url => dispatch(actions.people(url)),
  setPerson: () => dispatch(actions.person(null)),
});


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  async fetchPeople(e) {
    e.preventDefault();
    const url = 'https://swapi.co/api/people/';
    const data = await utils.get(url);
    const people = data.results;
    this.props.setPeople({ people });
  }
  
  async fetchPerson(url) {
    const person = await utils.get(url);
    this.props.setPerson({ person });
  }

  render() {
    return (
      <>
        <a href="#" onClick={this.fetchPeople}>
          Get The People
        </a>
        <section className={app.people}>
          <ul>
            {this.state.people.map((result, i) => (
              <li onClick={() => this.fetchPerson(result.url)} key={i}>
                {result.name}
              </li>
            ))}
          </ul>
          <div className={app.person}>
            {Object.keys(this.props.person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.props.person[key]}</span>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(App);

// Vinicio - this function lets you get values from the store
// const mapStoreStateToProps = state => {};

// Vinicio - this function lets you dispatch actions
// Vinicio - you could have access to getState
// const mapDispatchToProps = (dispatch) => ({
//   handleChange : newName => dispatch(personActions.change(newName)),
//   handleReset : () => dispatch(personActions.reset(null)),
// });

// export default connect(null, mapDispatchToProps)(ChangeName);
