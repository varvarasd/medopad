// @flow
import React, { Component } from 'react';
import { scaleLinear, scaleTime, scaleOrdinal } from 'd3-scale';
import {curveBasis} from 'd3';
import { max } from 'd3-array';
import { select } from 'd3-selection';

import './style.css';

class LineChartComponent extends Component {
   constructor(props){
      super(props)
      this.createLineChartMin = this.createLineChartMin.bind(this);
      this.createLineChartAvg = this.createLineChartAvg.bind(this);
      this.createLineChartMax = this.createLineChartMax.bind(this);
    }
    componentDidMount() {
      this.createLineChartMin(this.props);
      this.createLineChartAvg(this.props);
      this.createLineChartMax(this.props);
   }
   componentDidUpdate() {
      this.createLineChartMin(this.props);
      this.createLineChartAvg(this.props);
      this.createLineChartMax(this.props);
   }


   //****** MIN CHART
   createLineChartMin(param) {
      const nodeMin = this.nodeMin
      const dataMin = max(param.minimum)
      const yScale = scaleLinear()
         .domain([0, dataMin])
         .range([0, param.size[1]])
   select(nodeMin)
      .selectAll('rect')
      .data(param.minimum)
      .enter()
      .append('rect')
   
   select(nodeMin)
      .selectAll('rect')
      .data(param.minimum)
      .attr('x', (d,i) => i * param.width)
      .attr('y', d => param.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', param.width)
      .attr('id', 'chart-min')
   }


   //*******AVG CHART 

   createLineChartAvg(param) {
      const nodeAvg = this.nodeAvg
      const dataAvg = max(param.meanAverage)
      const yScale = scaleLinear()
         .domain([0, dataAvg])
         .range([0, param.size[1]])
   select(nodeAvg)
      .selectAll('rect')
      .data(param.meanAverage)
      .enter()
      .append('rect')
   
   select(nodeAvg)
      .selectAll('rect')
      .data(param.meanAverage)
      .attr('x', (d,i) => i * param.width)
      .attr('y', d => param.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', param.width)
      .attr('id', 'chart-max')
   }


   //****** MAX CHART
   createLineChartMax(param) {
      const nodeMax = this.nodeMax
      const dataMax = max(param.maximum)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, param.size[1]])
   select(nodeMax)
      .selectAll('rect')
      .data(param.maximum)
      .enter()
      .append('rect')
      
   
   select(nodeMax)
      .selectAll('rect')
      .data(param.maximum)
      .attr('x', (d,i) => i * param.width)
      .attr('y', d => param.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', param.width)
      .attr('id', 'chart-max')

      select(nodeMax)
            .selectAll("text")
            .data(param.maximum)
            .enter().append("text")
            .text(function(d) {return d})
                  .attr('x', (d,i) => i * param.width)
                  .attr('y', d => param.size[1] - yScale(d))
                  .attr('class', 'max-text')

   }

render() {
      return (
            <div>
                  <svg id='svg-max' ref={nodeMax => this.nodeMax = nodeMax} width={'100%'} height={200}></svg>
                  <svg id='svg-avg' ref={nodeAvg => this.nodeAvg = nodeAvg} width={'100%'} height={200}></svg>
                  <svg id='svg-min' ref={nodeMin => this.nodeMin = nodeMin} width={'100%'} height={200}></svg>
            </div>
      );
   }
}
export default LineChartComponent;