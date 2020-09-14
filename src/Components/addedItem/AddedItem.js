import React, { Component } from 'react'
import './addedItem.css'



class AddedItem extends Component{

    state ={
        name:"",
        rank: ""
    }

    change = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    newItem = (e) =>{
        e.preventDefault()
        if(e.target.name.value && e.target.rank.value !== ""){
            this.props.add(this.state)
            this.setState({
                name: "",
                rank: ""
            })
        }
        else{
            alert("fill all fields")
        }
    }



    render(){
        return(
            <div>
                <form onSubmit={this.newItem}>
                    <input type="text" placeholder="Enter name .." id="name" onChange={this.change} value={this.state.name}/>
                    <input type="text" placeholder="what rank ?" id="rank" onChange={this.change} value={this.state.rank}/>
                    <input type="submit" value="ADD"/>
                </form>
            </div>
        )
    }
}


export default AddedItem;