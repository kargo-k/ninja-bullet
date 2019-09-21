import React from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { item: state.item }
}

const Graph = ({ item }) => {

  if (!!item) {
    let ctx = document.getElementById('retail-sales-chart')
    let retailSales = []
    let weeks = []
    item.sales.map(week => {
      weeks.push(week.weekEnding)
      retailSales.push(week.retailSales)
    })
    let retailChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: weeks,
        datasets: [{
          data: retailSales,
          label: 'Retail Sales',
          borderColor: '#ccc',
          fill: false
        }],
      },
      options: {
        legend: {
          display: false,
        },
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            ticks: {
              fontFamily: 'Century Gothic'
            },
            time: {
              displayFormats: {
                month: 'MMM',
                day: ''
              }
            },
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            display: false
          }]
        }
      }
    })
  }

  return (
    <div id='retail-sales'>
      <h3>Retail Sales</h3>
      <div className='chart-container'>
        <canvas id='retail-sales-chart'></canvas>
      </div>
    </div >
  )
}

export default connect(mapStateToProps)(Graph)