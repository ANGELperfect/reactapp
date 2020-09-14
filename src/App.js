import React, { Component } from 'react';
import './App.css';
import ToDoItem from './Components/toDoItem/ToDoItem'
import AddedItem from './Components/addedItem/AddedItem'

class App extends Component{

  state = {
    items: [
      {id:  Math.random(), name: "Tariq", rank: "Full-Stack"},
      {id:  Math.random(), name: "Imen Zighed", rank: "Developer"},
      {id:  Math.random(), name: "SystemDz", rank: "Full-Stack"},
      {id:  Math.random(), name: "Aymen Kenway", rank: "Developer"},
      {id:  Math.random(), name: "Perfect Angel", rank: "Developer"},
      {id:  Math.random(), name: "Zighed Mohammed Elamine", rank: "Full-Stack"},
      {id:  Math.random(), name: "Bilal Bentoumi", rank: "Full-Stack"},
      {id:  Math.random(), name: "Taher Boudiaf", rank: "Front-End-Tier-1"},
      {id:  Math.random(), name: "Rahma Nour", rank: "Developer"},
      {id:  Math.random(), name: "Selma hn", rank: "Developer"},
      {id:  Math.random(), name: "Rania Labdi", rank: "Developer"},
      {id:  Math.random(), name: "Skulpturen", rank: "NONE"},
      {id:  Math.random(), name: "Maroua", rank: "NONE"},
      {id:  Math.random(), name: "pepegarrix", rank: "NONE"}

    ]
  }

  deleteItem = (id) =>{
    var item = this.state.items.filter( ii =>{
      return ii.id !== id
    } )
    this.setState({items: item})
  }

  addItem = (itm) =>{
    itm.id = Math.random()
    var itms = this.state.items
    itms.push(itm)
    this.setState({
      items: itms
    })
  }

  componentWillMount(){
    localStorage.getItem("members") && this.setState({
      items: JSON.parse(localStorage.getItem("members")),
    })
  }

 



  componentWillUpdate(nextProps, nextState){
    localStorage.setItem("members", JSON.stringify(nextState.items))
  }

  restore = () =>{
    var mmbrs = [
      {id:  Math.random(), name: "Tariq", rank: "Full-Stack"},
      {id:  Math.random(), name: "Imen Zighed", rank: "Developer"},
      {id:  Math.random(), name: "SystemDz", rank: "Full-Stack"},
      {id:  Math.random(), name: "Aymen Kenway", rank: "Developer"},
      {id:  Math.random(), name: "Perfect Angel", rank: "Developer"},
      {id:  Math.random(), name: "Zighed Mohammed Elamine", rank: "Full-Stack"},
      {id:  Math.random(), name: "Bilal Bentoumi", rank: "Full-Stack"},
      {id:  Math.random(), name: "Taher Boudiaf", rank: "Front-End-Tier-1"},
      {id:  Math.random(), name: "Rahma Nour", rank: "Developer"},
      {id:  Math.random(), name: "Selma hn", rank: "Developer"},
      {id:  Math.random(), name: "Rania Labdi", rank: "Developer"},
      {id:  Math.random(), name: "Skulpturen", rank: "NONE"},
      {id:  Math.random(), name: "Maroua", rank: "NONE"},
      {id:  Math.random(), name: "pepegarrix", rank: "NONE"}
    ]
    this.setState({
      items: mmbrs
    })
  }


  render(){
    return (
      <div className="App container">
        <h1 className="title">Members List</h1>
        <ToDoItem doItems={this.state.items} dlt={this.deleteItem}/>
        <AddedItem add={this.addItem}/>
        <p id="restore" onClick={this.restore}>Restore</p>
      </div>
    )
  }
}



export default App;
