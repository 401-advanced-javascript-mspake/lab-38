import React from 'react';
import { connect } from 'react-redux';

import url from './link-wrapper';

const mapStoreStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = () => {};

function peopleList(props) {
  return (
    <ul>
    {this.props.people.map((result, i) => (
      <li onClick={() => props.fetchPerson(url)} key={i}>
        {result.name}
      </li>
    ))}
  </ul>
  );
}

export default connect(mapStoreStateToProps, mapDispatchToProps)(peopleList);
