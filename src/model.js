// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean} from "lodash-es"
import {rad2deg,deg2rad,rk} from "./utils"

const L = param.L;
const dt = param.dt;
const M = param.M;
const g = param.g;	

var pendulum = [];
var ghost = [];

const doppelpendel=(L,g) => {
	return function (x){
		let A= Math.cos(x[0]-x[1]);
		let g = param.gravity.widget.value() ? param.g : 0;
		let f = [];
		f[0] =   (  x[2]-A*x[3]) / (2-A*A);
		f[1] =   (2*x[3]-A*x[2]) / (2-A*A);
		f[2] = - f[0]*f[1]*Math.sin(x[0]-x[1]) - 2*g/L*Math.sin(x[0]);
		f[3] =   f[0]*f[1]*Math.sin(x[0]-x[1]) -   g/L*Math.sin(x[1]);
		return f;
	}
}

const f = doppelpendel(L,g);

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	param.timer={}; param.T=0;

	pendulum.state = [param.angle_1.widget.value(),param.angle_2.widget.value(),0,0];
	ghost.state = [param.angle_1.widget.value(),param.angle_2.widget.value()+param.epsilon,0,0];
	pendulum.hist = [];
	ghost.hist = [];

	pendulum.hist.push({ 
		x:L * Math.cos(pendulum.state[0]-Math.PI/2) + L * Math.cos(pendulum.state[1]-Math.PI/2),
		y:L * Math.sin(pendulum.state[0]-Math.PI/2) + L * Math.sin(pendulum.state[1]-Math.PI/2)
	});

	ghost.hist.push({ 
		x:L * Math.cos(ghost.state[0]-Math.PI/2) + L * Math.cos(ghost.state[1]-Math.PI/2),
		y:L * Math.sin(ghost.state[0]-Math.PI/2) + L * Math.sin(ghost.state[1]-Math.PI/2)
	});

	
}


// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {

	param.T++;
	let dy = rk(pendulum.state,f,dt);
	let dz = rk(ghost.state,f,dt);

	for(let i=0;i<4;i++){ 
		pendulum.state[i]+=dy[i];
		ghost.state[i]+=dz[i];  
	}

	if (pendulum.hist.length > param.trajectory_length) {pendulum.hist.shift()}
	if (ghost.hist.length > param.trajectory_length) {ghost.hist.shift()}

	pendulum.hist.push({ 
		x:L * Math.cos(pendulum.state[0]-Math.PI/2) + L * Math.cos(pendulum.state[1]-Math.PI/2),
		y:L * Math.sin(pendulum.state[0]-Math.PI/2) + L * Math.sin(pendulum.state[1]-Math.PI/2)
	});

	ghost.hist.push({ 
		x:L * Math.cos(ghost.state[0]-Math.PI/2) + L * Math.cos(ghost.state[1]-Math.PI/2),
		y:L * Math.sin(ghost.state[0]-Math.PI/2) + L * Math.sin(ghost.state[1]-Math.PI/2)
	});

}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
pendulum.state = [param.angle_1.widget.value(),param.angle_2.widget.value(),0,0];
	ghost.state = [param.angle_1.widget.value(),param.angle_2.widget.value()+param.epsilon,0,0];
	pendulum.hist = [];
	ghost.hist = [];

	pendulum.hist.push({ 
		x:L * Math.cos(pendulum.state[0]-Math.PI/2) + L * Math.cos(pendulum.state[1]-Math.PI/2),
		y:L * Math.sin(pendulum.state[0]-Math.PI/2) + L * Math.sin(pendulum.state[1]-Math.PI/2)
	});

	ghost.hist.push({ 
		x:L * Math.cos(ghost.state[0]-Math.PI/2) + L * Math.cos(ghost.state[1]-Math.PI/2),
		y:L * Math.sin(ghost.state[0]-Math.PI/2) + L * Math.sin(ghost.state[1]-Math.PI/2)
	});

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {pendulum,ghost,initialize,go,update}
