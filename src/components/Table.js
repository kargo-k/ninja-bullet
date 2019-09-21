import React from 'react';
import { connect } from 'react-redux';
import { sortData } from '../actions';

const mapStateToProps = state => {
  return { data: state.table_data }
}

const mapDispatchToProps = dispatch => {
  return { sort_data: payload => dispatch(sortData(payload)) }
}

class Table extends React.Component {

  showData = (sales) => {
    let tb = document.querySelector('tbody')

    if (!!tb) {
      tb.innerHTML = ""
    }

    sales.map(s => {
      let tr = document.createElement('tr')
      let td_weekEnding = tr.insertCell(-1)
      td_weekEnding.innerHTML = `${s.weekEnding.substr(2, 8)}`

      let td_retailSales = tr.insertCell(-1)
      td_retailSales.innerHTML = '$ ' + s.retailSales.toLocaleString()

      let td_wholesaleSales = tr.insertCell(-1)
      td_wholesaleSales.innerHTML = '$ ' + s.wholesaleSales.toLocaleString()

      let td_unitsSold = tr.insertCell(-1)
      td_unitsSold.innerHTML = `${s.unitsSold}`

      let td_retailerMargin = tr.insertCell(-1)
      td_retailerMargin.innerHTML = '$ ' + s.retailerMargin.toLocaleString()

      tb.appendChild(tr)
    })
  }

  render() {
    return (
      <div id='table'>
        <table id='data-table'>
          <thead>
            <tr>
              <th onClick={e => this.props.sort_data('weekEnding')}>WEEK ENDING</th>
              <th onClick={e => this.props.sort_data('retailSales')}>RETAIL SALES</th>
              <th onClick={e => this.props.sort_data('wholesaleSales')}>WHOLESALE SALES</th>
              <th onClick={e => this.props.sort_data('unitsSold')}>UNITS SOLD</th>
              <th onClick={e => this.props.sort_data('retailerMargin')}>RETAILER MARGIN</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data ? this.showData(this.props.data) : null}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)