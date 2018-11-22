import React from 'react';
import {connect} from 'react-redux';

class Count extends React.Component{
	render(){
		return(
			<div>
				<h1>Total Todos {this.props.todos.length} </h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}
export default connect(mapStateToProps)(Count);