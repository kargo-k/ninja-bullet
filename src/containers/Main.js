import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from './Sidebar';
import Dataview from './Dataview';
import { connect } from 'react-redux';
import { setItem } from '../actions';

const mapDispatchToProps = dispatch => {
  return { set_item: payload => dispatch(setItem(payload)) }
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: null
    }
  }


  componentDidMount() {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(data => this.props.set_item(data[0]))
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div id='content'>
          <Sidebar />
          <Dataview />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(null, mapDispatchToProps)(Main)