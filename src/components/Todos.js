import React from 'react';
import { Container, Row, Col,Table, Button,
   Modal, ModalHeader, ModalBody, ModalFooter, Input
  } from 'reactstrap';

import { connect } from 'react-redux';
import { addTodo, editTodo } from '../store/actions';

class Todos extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      todoText: '',
      modal: false,
      editText:'',
      editIndex:null,
		}
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  manageTask = () => {
    if(this.state.editIndex !== null){
      const object = {text: this.state.todoText, index: this.state.editIndex};
      this.props.editTodo(object);
    }
    else{
      this.props.addTodo(this.state.todoText);
    }
    this.toggle();
    this.setState({todoText: '', editIndex: null});
  }
    

	onDelete = (index) => {
		let todos = this.props.todos;
    todos.splice(index, 1);
		this.setState({ todos: todos })
  }

	onEdit = (index, text) => {
  
		this.setState({editIndex: index, todoText: text }, () =>  {
      this.toggle();
    })
  }
  
  renderTable = () => {
    if(this.props.todos.length > 0){
      return this.props.todos.map((todo, index) => {
        const k = index+1;
        return (
          <tr key={k} >
            <td > {k} </td>
            <td > {todo.text} </td>
            <td > <i onClick = {()=> this.onEdit(index, todo.text) } className="fa fa-edit"> </i> </td>
            <td > <i onClick = {()=> this.onDelete(index) } className="fa fa-remove"> </i> </td>
          </tr>
        );
      });
    }
  }

	render() {
		return (
		<Container>
      <Row>
      
      <Col sm={{ size: 6, offset: 3 }}>
  
				<h1>Todo App</h1>
          <Table dark >
            <thead>
              <tr>
                <th>#</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </Table>
          
          </Col>
        </Row>
	
			
        <Button color="danger" onClick={this.toggle}>Add Task</Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add your task here</ModalHeader>
          <ModalBody>

          <Input type='text' onChange={(e) => this.setState({ todoText: e.target.value })} value={this.state.todoText} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.manageTask()}> Add Task </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    
    	</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: (payload) => dispatch(addTodo(payload)),
		editTodo: (payload) => dispatch(editTodo(payload)),
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Todos);