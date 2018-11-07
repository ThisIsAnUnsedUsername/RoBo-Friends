//this type of file knowns as smart componenet container

import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/Boundary';
import Header from '../component/Header';

class MainPage extends Component {
	componentDidMount() {
		//console.log(process.env.NODE_ENV);
		//return environment variable NODE_ENV in this process
		//NODE_ENV is default by create-react-app
		//the value is development if run in development
		//the value is production if built
		//this is common practice
		//console.log(process.env.REACT_APP_SAY_HI); //is defined in .env file
		this.props.onRequestRobots();
	}

	filteredRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name
				.toLowerCase()
				.includes(this.props.searchField.toLowerCase());
		});
	};

	render() {
		const { onSearchChange, isPending } = this.props;
		console.log(this.props);
		return (
			<div className="tc">
				<Header />
				<SearchBox searchChange={onSearchChange} />

				<Scroll>
					{isPending ? (
						<h1 className="tc">Loading</h1>
					) : (
						<ErrorBoundry>
							<CardList robots={this.filteredRobots()} />
						</ErrorBoundry>
					)}
				</Scroll>
			</div>
		);
	}
}

export default MainPage;
