import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getTask} from '../redux/actions/Todo'

class Home extends Component {
  componentDidMount(){
    this.props.getTask()
  }
  render() {
    const {task} = this.props.todo
    return (
      <div>
        Welcome! You Have {task.length} Tasks!
        <div>
          {task.filter(o => o.isComplete === true).length} Completed
        </div>
        <div>
          {task.filter(o => o.isComplete === false).length} Unompleted
        </div>
        <div>
          <Link to='/todo'>Saw tasks</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = {getTask}

export default connect(mapStateToProps,mapDispatchToProps)(Home)