// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {pendulum,ghost} from "./model.js"
import styles from "./styles.module.css"
import cfg from "./config.js"
import {takeRight} from "lodash-es"

const L = param.L;
const X = d3.scaleLinear().domain([-2, 2]);
const Y = d3.scaleLinear().domain([2, -2]);
const line = d3.line().x(d=>X(d.x)).y(d=>Y(d.y));

var pd, gh;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.


const legs=(theta1,theta2)=>{
	return [
		{	x1: 0,
			y1: 0,
			x2: L * Math.cos(theta1-Math.PI/2),
			y2: L * Math.sin(theta1-Math.PI/2),
		},
		{	x1:L * Math.cos(theta1-Math.PI/2),
			y1:L * Math.sin(theta1-Math.PI/2),
			x2:L * Math.cos(theta1-Math.PI/2) +  L * Math.cos(theta2-Math.PI/2),
			y2:L * Math.sin(theta1-Math.PI/2) + L * Math.sin(theta2-Math.PI/2)
		},
	]
}

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;

	X.range([0,W]);
	Y.range([0,H]);
		
	display.selectAll("#origin").remove();
	
	const origin = display.append("g").attr("id","origin")

	gh = origin.append("g")
		.attr("id","ghost")
		.style("opacity",param.ghost.widget.value() ? 0.3 : 0);

	pd = origin.append("g")
		.attr("id","pendulum")		
		
	pd.append("path").attr("class",styles.trajectory)
		.attr("d",line(pendulum.hist))
		.style("opacity",param.show_entire_trajectory.widget.value() ? null : 0);

	pd.append("path").attr("class",styles.trace)
		.attr("d",line(pendulum.hist))
		.style("opacity",param.show_trace.widget.value() ? null : 0);
	
	gh.append("path").attr("class",styles.trajectory_ghost)
		.attr("d",line(ghost.hist))
		.style("opacity",param.show_entire_trajectory.widget.value() ? null : 0);

	gh.append("path").attr("class",styles.trace_ghost)
		.attr("d",line(ghost.hist))
		.style("opacity",param.show_trace.widget.value() ? null : 0);	

	gh.selectAll("."+styles.leg).data(legs(ghost.state[0],ghost.state[1])).enter().append("line")
			.attr("class", styles.leg)
			.attr("id",function(d,i){return "leg"+(2*i)})
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})
			.style("stroke-width", cfg.simulation.pendulum_thickness+2*cfg.simulation.pendulum_border);

	gh.selectAll("."+styles.leg_inset).data(legs(ghost.state[0],ghost.state[1])).enter().append("line")
			.attr("class", styles.leg_inset)
			.attr("id",function(d,i){return "leg"+(2*i+1)})
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})
			.style("stroke-width", cfg.simulation.pendulum_thickness);
	
	gh.select("#leg2").raise();
	gh.select("#leg3").raise();

	gh.selectAll("."+styles.joint).data(legs(ghost.state[0],ghost.state[1])).enter().append("circle")
			.attr("class", styles.joint)
			.attr("r",2)
			.attr("cx",function(d){return X(d.x1)})
			.attr("cy",function(d){return Y(d.y1)})
			.style("stroke","black").style("fill","black")

	
	pd.selectAll("."+styles.leg).data(legs(pendulum.state[0],pendulum.state[1])).enter().append("line")
			.attr("class", styles.leg)
			.attr("id",function(d,i){return "leg"+(2*i)})
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})
			.style("stroke-width", cfg.simulation.pendulum_thickness+2*cfg.simulation.pendulum_border);

	pd.selectAll("."+styles.leg_inset).data(legs(pendulum.state[0],pendulum.state[1])).enter().append("line")
			.attr("class", styles.leg_inset)
			.attr("id",function(d,i){return "leg"+(2*i+1)})
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})
			.style("stroke-width", cfg.simulation.pendulum_thickness);

	pd.select("#leg2").raise();
	pd.select("#leg3").raise();

	pd.selectAll("."+styles.joint).data(legs(pendulum.state[0],pendulum.state[1])).enter().append("circle")
		.attr("class", styles.joint)
		.attr("r",2)
		.attr("cx",function(d){return X(d.x1)})
		.attr("cy",function(d){return Y(d.y1)})
		.style("stroke","black").style("fill","black")
	
	
	origin.selectAll("." + styles.leg).transition(1000).style("opacity",param.hide_pendulum.widget.value() ? 0 : null);
	origin.selectAll("." + styles.leg_inset).transition(1000).style("opacity",param.hide_pendulum.widget.value() ? 0 : null);
	origin.selectAll("." + styles.joint).transition(1000).style("opacity",param.hide_pendulum.widget.value() ? 0 : null);
	
};


// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.



// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	gh.selectAll("."+styles.leg).data(legs(ghost.state[0],ghost.state[1]))
		.attr("id",function(d,i){return "leg"+(2*i)})
		.attr("x1",function(d){return X(d.x1)})
		.attr("y1",function(d){return Y(d.y1)})
		.attr("x2",function(d){return X(d.x2)})
		.attr("y2",function(d){return Y(d.y2)})
	

	gh.selectAll("."+styles.leg_inset).data(legs(ghost.state[0],ghost.state[1]))
			.attr("id",function(d,i){return "leg"+(2*i+1)})
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})


	pd.selectAll("."+styles.leg).data(legs(pendulum.state[0],pendulum.state[1]))
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})
			

	pd.selectAll("."+styles.leg_inset).data(legs(pendulum.state[0],pendulum.state[1]))
			.attr("x1",function(d){return X(d.x1)})
			.attr("y1",function(d){return Y(d.y1)})
			.attr("x2",function(d){return X(d.x2)})
			.attr("y2",function(d){return Y(d.y2)})

	gh.selectAll("."+styles.joint).data(legs(ghost.state[0],ghost.state[1]))
			.attr("cx",function(d){return X(d.x1)})
			.attr("cy",function(d){return Y(d.y1)})

	pd.selectAll("."+styles.joint).data(legs(pendulum.state[0],pendulum.state[1]))
		.attr("cx",function(d){return X(d.x1)})
		.attr("cy",function(d){return Y(d.y1)})

	//gh.transition(1000).style("opacity",param.ghost.widget.value() ? 0.2 : 0);

	pd.select("."+styles.trace)
		.attr("d",line(takeRight(pendulum.hist,param.trace_length)))

	pd.select("."+styles.trajectory)
		.attr("d",line(pendulum.hist))
	
	gh.select("."+styles.trace_ghost)
		.attr("d",line(takeRight(ghost.hist,param.trace_length)))

	gh.select("."+styles.trajectory_ghost)
		.attr("d",line(ghost.hist))


}

const go = update;

export {initialize,go,update}
