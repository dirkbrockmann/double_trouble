
export default {
		dt:0.0125,
		L:0.95,
		M:0.1,
		g:9.81,
		epsilon:1e-3,
		trace_length:100,
		trajectory_length:5000,
	
		angle_1: {
			range:[-Math.PI+2e-3,Math.PI-2e-3],
			default:3*Math.PI/4
		},
		angle_2: {
			range:[-Math.PI,Math.PI],
			default:3*Math.PI/4
		},
		show_trace: {
			default: false
		},
		ghost: {
			default: false
		},
		show_entire_trajectory: {
			default: false
		},
		hide_pendulum: {
			default: false
		},
		gravity: {
			default: true
		}
}

