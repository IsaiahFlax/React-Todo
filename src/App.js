import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './components/Todo.css';
import store from 'store';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listItems: [{
        task: this.task, 
        id: this.id,
        completed: false
      }],
      newItem: "",
      placeholder: "...todo",
      fieldActive: false
    };
    
    this.activateField = this.activateField.bind(this);
    this.disableFocus = this.disableFocus.bind(this);
  }

  componentWillMount(){
    store.get('list') && this.setState({
      listItems: (store.get('list'))
    })
  }

  activateField(){
    this.setState({
      fieldActive: false
    })
  }
  disableFocus(e) {
    if (e.target.value === "") {
      this.setState({
        fieldActive: false
      })
    }
  }

 
 
  toggleCompleted = task => {
    console.log("id ", task.id, task.completed);
    this.setState({
      listItems: this.state.listItems.map(item => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };


    addItemEvent = taskName => {
      this.setState({
        listItems: [{
          task: taskName,
          id: Date.now(),
          completed: false
          }, ...this.state.listItems]
      })
      this.state.listItems ? console.log('addItemEvent', this.state.listItems) : console.log('no listItem')
    }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  clearCompleted = () => {
    this.setState({
      listItems: this.state.listItems.filter(item => {
        return !item.completed;
      })
    });
  };

  handleChanges = e => {
    this.setState({ newItem: e.target.value });
    this.activateField(e);
    e.preventDefault();
    
  };
  // componentDidMount() {
  //   const todoItem = localStorage.getItem(listItems)
  //   this.setState({ id, listItems})
  // }

  // componentDidUpdate() {

  // }

  handleAddItem = e => {
    e.preventDefault();
    this.addItemEvent(this.state.newItem);
   // const storeObject = this.state.newItem;
    //store.set(this.state.newItem.id, storeObject);
    this.setState({newItem: ''})
    console.log("handleAddItem", this.state.listItems)
  };
componentWillUpdate(nextProps, nextState) {
  store.set('list', nextState.listItems)
}
  render() {
    return (
      
      <div className="everything">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        className="todoform" 
        addItemEvent={this.addItemEvent} 
        newItem={this.state.newItem} 
        handleChanges={this.handleChanges}
        handleAddItem={this.handleAddItem} 
        placeholder={this.state.placeholder} 
        activateField={this.activateField}
        disableFocus={this.disableFocus} />
        <TodoList
         listItems={this.state.listItems}
         toggleCompleted={this.toggleCompleted} 
         clearCompleted={this.clearCompleted} />
      </div>
    )
  }
}

export default App;
