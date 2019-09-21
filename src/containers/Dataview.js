import React from 'react';
import Graph from '../components/Graph'
import Table from '../components/Table'

const Dataview = ({ item }) => {
  return (
    <div id='right'>
      <Graph />
      <Table />
    </div>
  )
}

export default Dataview