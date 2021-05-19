import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'


const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/items')
        .then(res => res.json())
        .then(data =>
            setItems(data)
            )
    }, [])

    const itemsList = items.map(item => 
        <ListGroup variant="flush"><ListGroup.Item><Link to={`/items/${item.id}`}>{item.name}</Link></ListGroup.Item></ListGroup>)

    return (
       
        <div>
            <h1>My Bucket List</h1>
            <ul className="items-list">
                {itemsList}
                <Link to={"/items/new"}><button>Add New Item</button> </Link>
            </ul>
        </div>
    )
}
export default Items