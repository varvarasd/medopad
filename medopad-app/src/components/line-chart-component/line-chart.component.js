// @flow
import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import ToggleComponent from '../toggle-component'

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
         .domain([0, dataMin + param.top])
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
         .domain([0, dataAvg + param.top])
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
         .domain([0, dataMax + param.top])
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
   }

      render() {

            const maxToggle = () => {
                  const nodeMax = this.nodeMax
                  const dataMax = max(this.props.maximum)
                  const yScale = scaleLinear()
                        .domain([0, dataMax + this.props.top])
                        .range([0, this.props.size[1]])

                  select(nodeMax)
                        .selectAll("text")
                        .data(this.props.maximum)
                        .enter().append("text")
                        .text(function(d) {return d})
                              .attr('x', (d,i) => i * this.props.width)
                              .attr('y', d => this.props.size[1] - yScale(d))
                              .attr('class', 'max-text')
                  
                  select(nodeMax)
                        .selectAll('rect')
                        .style('opacity', '0.8')
            }

            const avgToggle = () => {
                  const nodeAvg = this.nodeAvg
                  const dataAvg = max(this.props.meanAverage)
                  const yScale = scaleLinear()
                        .domain([0, dataAvg + this.props.top])
                        .range([0, this.props.size[1]])

                  select(nodeAvg)
                        .selectAll("text")
                        .data(this.props.meanAverage)
                        .enter().append("text")
                        .text(function(d) {return d})
                              .attr('x', (d,i) => i * this.props.width)
                              .attr('y', d => this.props.size[1] - yScale(d))
                              .attr('class', 'avg-text')
                  
                  select(nodeAvg)
                        .selectAll('rect')
                        .style('opacity', '0.8')
            }
            
            const minToggle = () => {
                  const nodeMin = this.nodeMin
                  const dataMin = max(this.props.minimum)
                  const yScale = scaleLinear()
                        .domain([0, dataMin + this.props.top])
                        .range([0, this.props.size[1]])

                  select(nodeMin)
                        .selectAll("text")
                        .data(this.props.minimum)
                        .enter().append("text")
                        .text(function(d) {return d})
                              .attr('x', (d,i) => i * this.props.width)
                              .attr('y', d => this.props.size[1] - yScale(d))
                              .attr('class', 'min-text')
                  
                  select(nodeMin)
                        .selectAll('rect')
                        .style('opacity', '0.8')
            }
            return (
                  <div>
                        <div>
                              <ToggleComponent 
                                    name='min'
                                    minToggle={minToggle}
                                    minimum={this.props.minimum}
                                    styles={{'position': 'absolute', 'top': '600px', 'left': '600px'}}
                                    />
                              <ToggleComponent 
                                    name='avg'
                                    avgToggle={avgToggle}
                                    meanAverage={this.props.meanAverage}
                                    styles={{'position': 'absolute', 'top': '600px', 'left': '550px'}}
                                    />
                              <ToggleComponent 
                                    name='max'
                                    maxToggle={maxToggle}
                                    maximum={this.props.maximum}
                                    styles={{'position': 'absolute', 'top': '600px', 'left': '500px'}}
                                    />
                        </div>
                        <div>
                              <svg id='svg-max' ref={nodeMax => this.nodeMax = nodeMax} width={'100%'} height={400}></svg>
                              <svg id='svg-avg' ref={nodeAvg => this.nodeAvg = nodeAvg} width={'100%'} height={400}></svg>
                              <svg id='svg-min' ref={nodeMin => this.nodeMin = nodeMin} width={'100%'} height={400}></svg>
                        </div>
                  </div>
            );
      }
}

export default LineChartComponent;