import React, { Component } from 'react';

class ErrorBoundry extends Component {
	constructor(props) {
		super(props); //need super() or else cannot use 'this'
		this.state = {
			hasError: false
		};
	}

	componentDidCatch(error, info) {
		//method of React.Compnent
		//catch error
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops. That is not good</h1>; //this is only shown in build, not development
		}
		return this.props.children; //children is whatever JSX contain in ErrorBoundry selector
	}
}

export default ErrorBoundry;
