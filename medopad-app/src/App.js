// @flow

import React, { Component } from 'react';
import axios from 'axios';
import LineChartComponent from './components/line-chart-component';

import './App.css';

class App extends Component {
  state = {
    data: []
  };

  componentWillMount(){
    let URL = 'http://localhost:3000/heartrate';
    axios
      .get(URL)
      .then(({data}) => this.setState({data}) 
    );
  }

  render() {
    
    let {data} = this.state;

    const dataRow = data.map(({minimum, maximum, meanAverage, dateTime}, index) => {
              return ( 
                
                  <tr key={index}>
                    <td>{minimum}</td>
                    <td>{maximum}</td>
                    <td>{meanAverage}</td>
                    <td>{dateTime}</td>
                  </tr>
                
              )}
            );
    const minimum = data.map(x => parseFloat(x.minimum))
    const meanAverage = data.map(x => parseFloat(x.meanAverage))
    const maximum = data.map(x => parseFloat(x.maximum))
    const dateTime = data.map(x => x.dateTime)
    
    return (
        <div>
          <LineChartComponent 
            maximum={maximum} 
            meanAverage={meanAverage} 
            minimum={minimum}
            dateTime={dateTime}
            top={100}
            width={window.innerWidth / 95 }
            size={[0,400]}
            height={1000}
            />  
          <table>
            <thead>
              <tr>
                <th>Minimum</th>
                <th>Maximum</th>
                <th>Average</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dataRow}
            </tbody>
          </table>
        </div>
    );
  }
}

export default App;
