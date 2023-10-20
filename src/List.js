import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";

function List({ allItems, selectedItems, setSelectedItems }) {
  const onChange = (e) => {
    const newValue = e.target.id;
    if (!selectedItems.includes(newValue)) {
      setSelectedItems([...selectedItems, newValue]);
    } else {
      const newArray = selectedItems.filter((e) => e !== newValue);
      setSelectedItems(newArray);
    }
  };

  return (
    <div className="list">
      {allItems.map((i) => (
        <ListItem key={i.id} id={i.id} value={i.value} onChange={(e) => onChange(e)} />
      ))}
    </div>
  );
}

export default List;
