import React from 'react';
import Task from './Task';

export default class Anote extends React.Component{
  
  constructor(props){
    super(props)

    this.state={
      task:[],
      newTask:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    //this setState
    this.setState({
      task: [
        ...this.state.task,
        {text:this.state.newTask}
      ]
    })


    this.setState({newTask:''})
    e.preventDefault();
  }

  handleChange(e){
this.setState({newTask:e.target.value})
  }
  
  
  
  
  
  render(){
    return(
      <div>
        
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.newTask} onChange={this.handleChange} />
      <button type="submit">Salvar</button>
      
      </form>
      {this.state.task.map((task, index)=>{
        return <Task key={index} text={task.text} />
      })}
      
      </div>      
    )
  }
}