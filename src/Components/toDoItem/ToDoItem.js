import React from 'react'
import './toDoItem.css'


const ToDoItem = (p) =>{
    var {doItems, dlt} = p
    var length = doItems.length
    var listItems = length ? (doItems.map( i =>{
        return(
            <div key={i.id}>
                <span className="name">{i.name}</span>
                <span className="rank">{i.rank}</span>
                <span className="action icon" onClick={() => dlt(i.id)}>&times;</span>
            </div>
        )
    } )) : (<p>there is no items to show</p>)
    return(
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="rank title">Rank</span>
                <span className="action title">{length}</span>
            </div>
            {listItems}
        </div>
    )
}



export default ToDoItem;