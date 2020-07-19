import React from 'react';
import logo from './logo.svg';
import './App.css';

function Sai() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//==========================================================

function FormattedDate(props) {
  return <h4 className="clock">{props.date.toLocaleTimeString()}</h4>;
}
//===========================================
class App extends React.Component {
  display=<div>what up bady</div>;
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      show:false
    };
    
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: "",
        
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id !== id);
    this.setState({ list: updatedlist });
  }

  updateInput(input) {
    this.setState({ newItem: input });
  }
  updateShow(input){
    this.setState({show:!input});
  }
  
  render() {
   
    if(!this.state.show){
      return <div><button onClick={()=>this.updateShow(this.state.show)}>Add data</button></div>;;
    }
    else{
      return <div>
   
      <h1 className="app-title">LCO ToDo App</h1>
      <div className="container">
        Add an Item....
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Write a Todo"
          required
          value={this.state.newItem}
          onChange={e => this.updateInput(e.target.value)}
        />
        <button
          className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
        >
          Add Todo
        </button>
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    name="idDone"
                    checked={item.isDone}
                    onChange={() => {}}
                  />
                  {item.value}
                  <button
                    className="btn"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
            
          </ul>
        </div>
      </div>
    </div>;
    }
    //let display=<div>helloworld<button onClick={()=>this.updateShow(this.state.show)}></button></div>;
    
    //return {display} ;
    
  }
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
       
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
//->stateless clock because it donot contains states
function Time()  {
  return (
    <div>
      <Clock />
      
    </div>
  );
}
class Button extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render(){
  return (
    <button onClick={async() => this.setState({ count:this.state.count+1})}>
      Click me!{this.state.count}
    </button>
  );}
}



export {Time,Button,App}
