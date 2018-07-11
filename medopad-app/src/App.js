// @flow
import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    data: []
  };

  componentWillMount(){
    let URL = 'http://localhost:3000/heartrate';
    axios
      .get(URL)
      .then(res => this.setState({data: res.data}) 
    );
  }

  render() {
    
    const data = this.state.data;

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
    return (
      <table>
        <tbody>
          <tr>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Average</th>
            <th>Date</th>
          </tr>
          {dataRow}
        </tbody>
      </table>
    );
  }
}

export default App;
