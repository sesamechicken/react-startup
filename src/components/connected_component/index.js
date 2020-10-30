import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

export class ConnectedComponentExample extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
  }

  onKeyUp = (e) => {
    const { value } = e.target;
    e.persist();
    this.setState({ inputValue: value });

    // A little overboard; I'm looking for the ENTER key
    if (e.keyCode === 13) {
      this.addListItem();
      e.target.value = '';
    }
  }

  addListItem = () => {
    const { inputValue } = this.state;
    const { addToList } = this.props;

    addToList(inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    const { items } = this.props;

    return (
      <React.Fragment>
        <div>
          <h2>redux</h2>
          This repo has been updated to include an instance of redux. If your
          components depend on it, they can use it as they see fit. For now, it's just
          your grandma's shopping list.
        </div>
        <ul>
          { items.map((item, indx) => <li key={`${item + indx}`}>{item}</li>)}
        </ul>
        <input type="text" onKeyUp={(e) => this.onKeyUp(e)} placeholder="Add to her list" />
        <button type="button" onClick={() => this.addListItem()}>Add</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ items = '' }) => {
  return {
    items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (item) => dispatch(actions.addToList(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedComponentExample);
