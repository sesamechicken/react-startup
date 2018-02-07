import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../redux/actions/sitedata';

export class Fetchy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div>
        some stuff
        <ul>
          <li>Peoples</li>
          { this.props.people.map((p, index) =>
            <li key={p.name}><img src={`https://api.adorable.io/avatars/32/${index}@adorable.png`} alt={p.name} />{p.name} - hair: {p.hair_color}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ example: { people } }) => ({
  people
});

const mapDispatchToProps = {
  loadData
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetchy);
