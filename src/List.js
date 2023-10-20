import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';

function List({ items }) {
    const [selectedItems,setSelectedItems] = useState([]);
    const onChange = (e) => {
        const newValue=e.target.id;
        console.log(newValue);
        if (!selectedItems.includes(newValue)) {
            setSelectedItems([...selectedItems,newValue]);
        }else{
            const newArray = selectedItems.map(e => e!==newValue?)
            setSelectedItems([...])
        }
    };
    useEffect(()=>{
        console.log(selectedItems);
    },[selectedItems])
    return (
        <div className="list">
        {items.map(i => <ListItem id={i.id} value={i.value} onChange={e => onChange(e)} />)}
        </div>
    );
}

export default List;