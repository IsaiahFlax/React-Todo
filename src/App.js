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
    };
   this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  toggleCompleted = id => {
    console.log("id ", id);
    this.setState({
      completed: this.state.listItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  handleInputChange = event => {
   // console.log("handleInputChange event", this.state.newItem);
    this.setState({newItem: event.target.value});
  };

    addItemEvent = event => {
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
        <TodoForm addItemEvent={this.addItemEvent} handleInputChange={this.handleInputChange} newItem={this.state.newItem} />
        <TodoList listItems={this.state.listItems} toggleCompleted={this.toggleCompleted}/>
      </div>
    )
  }
}

export default App;
