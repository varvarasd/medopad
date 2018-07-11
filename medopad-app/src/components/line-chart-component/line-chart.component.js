// @flow

import React from 'react';
import axios from 'axios';

import {LineChart} from 'react-d3-basic';

const LineChartComponent = () => {

    let URL = 'http://localhost:3000/heartrate';
    let data;
    axios
      .get(URL)
      .then(res => data = res 
    );
    var generalChartData = data;
 
    var chartSeries = [
        {
          field: 'age',
          name: 'Age',
          color: '#ff7f0e',
          style: {
            "stroke-width": 2,
            "stroke-opacity": .2,
            "fill-opacity": .2
          }
        }
      ],
      x = function(d) {
        return d.index;
      }
    return(
      <LineChart
        width= {600}
        height= {300}
        data= {generalChartData}
        chartSeries= {chartSeries}
        x= {x}
      />
    );
}

export default LineChartComponent;