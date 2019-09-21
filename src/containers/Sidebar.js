import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { item: state.item }
}

const Sidebar = ({ item }) => {
  if (!!item) {
    return (
      <div id="sidebar">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>

        <div id='tags'>
          {item.tags.map(tag => {
            return <button key={tag}>{tag}</button>
          })}
        </div>

        <div id='menu'>
          <div className='menu'>Overview</div>
          <div className='menu active'>Sales</div>
        </div>

      </div>
    )
  }
  else {
    return <div id="sidebar">Loading Data...</div>
  }
}

export default connect(mapStateToProps)(Sidebar)