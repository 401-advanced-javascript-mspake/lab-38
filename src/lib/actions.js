import superagent from 'superagent';


//----------------------------------------------

export const people = payload => ({
  type: 'PEOPLE',
  payload,
});

export const person = payload => ({
  type: 'PERSON',
  payload,
});
