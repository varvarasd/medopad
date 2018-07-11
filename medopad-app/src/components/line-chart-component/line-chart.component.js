// @flow
import React, { Component } from 'react';
import { scaleLinear, scaleTime, scaleOrdinal } from 'd3-scale';
import {curveBasis} from 'd3';
import { max } from 'd3-array';
import { select } from 'd3-selection';

class LineChartComponent extends Component {
   constructor(props){
      super(props)
      this.createLineChart = this.createLineChart.bind(this)
    }
    componentDidMount() {
      this.createLineChart()
   }
   componentDidUpdate() {
      this.createLineChart()
   }
   createLineChart() {

      const node = this.node
      const dataMin = max(this.props.minimum)
      const yScale = scaleLinear()
         .domain([0, dataMin])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.minimum)
      .enter()
      .append('rect')
   
  //  select(node)
  //     .selectAll('rect')
  //     .data(this.props.minimum)
  //     .exit()
  //     .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.minimum)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * this.props.width)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', this.props.width)

      const dataMax = max(this.props.maximum)
      const yScaleMax = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.props.maximum)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.props.maximum)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.props.maximum)
      .style('fill', '#F6D479')
      .attr('x', (d,i) => i * this.props.width)
      .attr('y', d => this.props.size[1] - yScaleMax(d))
      .attr('height', d => yScaleMax(d))
      .attr('width', this.props.width)
   }
render() {
      return <svg ref={node => this.node = node}
      width={'100%'} height={200}>
      </svg>
   }
}
export default LineChartComponent;