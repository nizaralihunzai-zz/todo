import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../store/actions';

class From extends React.Component{

	constructor() {
		super();
		this.state = {
			todoText: '',
		}
	}
	
	render() {
		return (
			<div>
				<h1>Todo App</h1>
				<From className="from-control">
					<input type="text" className="from-control" />
				</From>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (payload) => dispatch(addTodo(payload)),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(From);