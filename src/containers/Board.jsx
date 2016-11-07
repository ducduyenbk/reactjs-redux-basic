import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ListsActions from '../actions/lists';

function mapStateToProps(state) {
  return {
    State: state.lists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListsActions, dispatch);
}

class Board extends Component {

  	constructor(props) {
    	super(props);
    	this.state = { isScrolling: false };
  	}

  	componentWillMount() {
  		//this.props.toggleDragging(true);
    	this.props.getLists(10);
  	}

	render() {

		console.log("Props", this.props.State);
		return (
			<div>
				Props = Xem trong console.log()
			</div>
		);
	}
}


Board = connect(mapStateToProps, mapDispatchToProps)(Board);
export default Board;
