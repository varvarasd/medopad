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

    const dataRow = data.map((res, index) => {
              return ( 
                
                  <tr key={index}>
                    <td>{res.minimum}</td>
                    <td>{res.maximum}</td>
                    <td>{res.meanAverage}</td>
                    <td>{res.dateTime}</td>
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
