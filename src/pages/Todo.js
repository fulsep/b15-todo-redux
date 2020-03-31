import React, { Component } from 'react'

import {
  Container, Row, Col,
  Input as OriginalInput, Modal, ModalHeader,
  ModalBody, ModalFooter, Button
} from 'reactstrap'
import {
  MdCheckCircle, MdEdit, MdDeleteForever
} from 'react-icons/md'

import {connect} from 'react-redux'
import {getTask,addTask,checkTask,editTask,deleteTask} from '../redux/actions/Todo'

import {
  Header, Input, Card,
  Body, Action, CenteredAlert
} from '../components/Core'

class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      input: '',
      inputEdit: '',
      editTask: 0,
      deleteTask: 0,
      showModal: false
    }
    this.inputComponent = React.createRef()
    this.inputEdit = React.createRef()
    this.addTodo = (e) => {
      if(e.keyCode === 13){
        const task = {task: e.target.value, isComplete: false}
        this.props.addTask(task)
        this.setState({input:''})
      }
    }
    this.checkTask = (i) => {
      this.props.checkTask(i)
    }
    this.editTask = (i) => {
      const {task} = this.props.todo
      this.setState({showModal: true, editTask:i+1, inputEdit: task[i].task})
    }
    this.saveEdit = (i) => {
      this.props.editTask({
        index: i,
        task: this.inputEdit.current.props.value
      })
      this.setState({showModal: false})
    }
    this.deleteTask = (task) => {
      this.setState({showModal: true, inputEdit: '', editTask: 0, deleteTask: task})
    }
    this.deleteTaskConfirm = (task) => {
      this.props.deleteTask(task)
      this.setState({showModal:false, deleteTask:0})
    }
  }
  render() {
    const {task} = this.props.todo
    return (
      <>
        <Container>
          <Header>
            <Row>
              <Col md={12}>
                <Input ref={this.inputComponent} onKeyUp={this.addTodo} type='text' placeholder='Enter your today task...' value={this.state.input} onChange={e=>this.setState({input:e.target.value})} />
              </Col>
            </Row>
          </Header>
          <Body>
            {task.length===0&&(
              <CenteredAlert>There is no Data</CenteredAlert>
            )}
            <Row>
              <Col md={12}>
                {task.length!==0 &&(
                  <h5>Total Tasks ({task.length})</h5>
                )}
              </Col>
              {task.length!==0 && task.map((v,i) =>(
                <Col key={i.toString()} md={12}>
                  <Card>
                    <span>
                      {v.task}
                    </span>
                    <Action>
                      {v.isComplete &&(
                        <span onClick={()=>this.checkTask(i)}>
                          <MdCheckCircle color='#35D660' size={25} />
                        </span>
                      )}
                      {!v.isComplete &&(
                        <span onClick={()=>this.checkTask(i)}>
                          <MdCheckCircle size={25} />
                        </span>
                      )}
                      <span onClick={()=>this.editTask(i)}>
                        <MdEdit color='#F97A24' size={25} />
                      </span>
                      <span onClick={()=>this.deleteTask(i)}>
                        <MdDeleteForever color='#DD5246' size={25} />
                      </span>
                    </Action>
                  </Card>
                </Col>
              ))}
            </Row>
          </Body>
        </Container>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>
            {(this.state.editTask!==0 && 'Edit Task') || 'Delete'}
          </ModalHeader>
          <ModalBody>
            {(this.state.editTask!== 0 && (
              <OriginalInput
                ref={this.inputEdit}
                onChange={e=>this.setState({inputEdit:e.target.value})}
                type='text'
                value={this.state.inputEdit}
              />
            )) || 'Are you sure want to delete?'}
          </ModalBody>
          <ModalFooter>
            {this.state.editTask!==0&&(
              <Button onClick={()=>this.saveEdit(this.state.editTask-1)}>OK</Button>
            )}
            {this.state.editTask===0&&(
              <Button onClick={()=>this.deleteTaskConfirm(this.state.deleteTask)}>OK</Button>
            )}
            <Button onClick={()=>this.setState({showModal: false})}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = {getTask,addTask,checkTask,editTask,deleteTask}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)