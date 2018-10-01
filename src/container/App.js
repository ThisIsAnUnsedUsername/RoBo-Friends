//this type of file knowns as smart componenet container

import React, {Component} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import './App.css';
import ErrorBoundry from '../component/Boundary';
import { setSearchField } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = state =>{//can name this whatever you want but this is standard name
    return {
        searchField: state.searchRobots.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return { onSearchChange: (event) => dispatch(setSearchField(event.target.value)) };//dispatch action to reducer
}

//State feed data to props
class App extends Component {//component with state ara called 'smart component'
    constructor(){//this is a mounting function, it automatically launch when page load
        super();//need super or else cannot use 'this'
        this.state = {
            robots: [],
            searchfield: ''
        };//use state instaed of variable
    }//this run first

    componentDidMount() {//this is a mounting function, it automatically launch when page load
        //overriding the function，this method is inherit from Compnent so it should not be an arrow function
        fetch('https://jsonplaceholder.typicode.com/users')//make http request to fetch repsonse
            .then( response => response.json())//convert to json format
            .then(users => this.setState({ robots: users }));
    }//this run 3rd, after render

    onSearchChange = (event) => {//important:searchbox input object call this function, so 'this' is input; but if this fucntion is arrow function, 'this' belong to App object
        this.setState({ searchfield: event.target.value});//method toimport { setSearchField } from './../actions';
    }
    
    render () {//overiding the function
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? //displaying loading if fetch request responding slow
        <h1 className ='tc'>Loading</h1> :
            //remember to return only one statement/element/container
                <div className = 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>{/*need 'this' because it is a method*/}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>{/*robot and Card will be pass out as CardList single argument {robots,Card}; here dont need curly bracket because it is already outside of JSX*/}
                        </ErrorBoundry>
                    </Scroll>    
                </div>
        }//render() run 2nd, and 4th(because state change happen in componentDidMount)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);//connect is higher order component, basically currying
//1. App subscribe to the state change in redux store
//2. state that App interested in redux store is mapStateToprops and mapDispatchToProps
