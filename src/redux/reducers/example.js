import { handle } from 'redux-pack';

const initialState = {
  people: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOAD_DATA':
      return handle(state, action, {
        start: prevState => ({ ...prevState, loading: true, error: null }),
        failure: prevState => ({ ...prevState, loading: false, error: payload }),
        success: prevState => ({ ...prevState, people: payload.data.results })
      });

    default:
      return state;
  }
};
