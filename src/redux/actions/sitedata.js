import axios from 'axios';

export const loadData = () => ({
  type: 'LOAD_DATA',
  promise: axios.get('https://swapi.co/api/people/?format=json'),
});
