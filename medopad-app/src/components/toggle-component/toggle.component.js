import React, { Component } from 'react';
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';


class ToggleComponent extends Component {
    // constructor(props){
    //     super(props);
    //     //this.maxToggle = this.maxToggle.bind(this);
    // }

    // maxToggle(){
    //     console.log(this.props)
    //     console.log('clicked')
    //     const nodeMax = this.nodeMax
    //     const dataMax = max(this.props.maximum)
    //     const yScale = scaleLinear()
    //     .domain([0, dataMax + this.props.top])
    //     .range([0, this.props.size[1]])

    //     select(nodeMax)
    //     .selectAll("text")
    //     .data(this.props.maximum)
    //     .enter().append("text")
    //     .text(function(d) {return d})
    //           .attr('x', (d,i) => i * this.props.width)
    //           .attr('y', d => this.props.size[1] - yScale(d))
    //           .attr('class', 'max-text')
    // }
    render(){
        //console.log(this.props)
        return (
                <button 
                    onClick={this.props.minToggle || this.props.avgToggle || this.props.maxToggle } 
                    style={this.props.styles}>{this.props.name}</button>
        );
    }
}

export default ToggleComponent;