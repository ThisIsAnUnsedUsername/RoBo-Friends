import React, { PureComponent } from 'react';
//pure component mean it only update and render if it prop change
//pure component may miss prop change because shallow comparison
class CounterButton extends PureComponent {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}
	shouldComponentUpdate(nextProps, nextState) {
		//use this only if this component take up resources to render because this method also consume resources
		//console.log(nextProps, nextState); //access to next props and state
		//return true;
		if (this.state.count !== nextState.count) {
			return true; //child component update with parent component, this is a way to set prevent it to update with parent component unconditionaly
		} //when children update and update, it doest require parent to re-render
		return false;
	}

	updateCount = () => {
		this.setState(state => {
			return { count: state.count + 1 };
		}); //safer way to update state by incrementing current state
	};

	render() {
		return (
			<button id="counter" color={this.props.color} onClick={this.updateCount}>
				Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;
