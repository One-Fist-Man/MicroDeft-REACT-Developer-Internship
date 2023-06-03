import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../style/Items/items.css'


const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const result = await axios.get('https://api.publicapis.org/entries')
            setItems(result.data.entries)
            console.log("result.entries", result.data.entries);
        }
        getItems()
    }, [])
    return (
        <div className="item__wrapper">
            {items.map((item) => (
                <div class="ui card" key={item.API}>
                    <div class="content">
                        <div class="header">{item.API}</div>
                    </div>
                    <div class="content">
                        <p>{item.Description}</p>
                        <span>Category: {item.Category}</span>
                    </div>
                    <div class="extra content">
                        <button class="ui button">Show More</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items