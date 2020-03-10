import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listItems: [{
        task: this.task, 
        id: this.id,
        completed: false
      }],
      newItem: ""
    }
  }

  toggleCompleted = event => {
    event.preventDefault();
    console.log("toggleCompleted", this.listItems)
    this.setState({
      listItems: [{
        completed: true ? false : true
        }]
    })
  }

  handleInputChange = event => {
   // console.log("handleInputChange event", this.state.newItem);
    this.setState({newItem: event.target.value});
  };

    onClickEvent = event => {
      event.preventDefault();
      //console.log("onClickEvent newItem", this.newItem)
      this.setState({
        listItems: [{
          task: this.state.newItem,
          id: Date.now(),
          completed: false
          }, ...this.state.listItems]
      })
    }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm onClickEvent={this.onClickEvent} handleInputChange={this.handleInputChange} newItem={this.state.newItem} toggleCompleted={this.toggleCompleted}/>
        <TodoList listItems={this.state.listItems} />
      </div>
    )
  }
}

export default App;
