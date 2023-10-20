import React from 'react';

function ListItem({id,value,onChange}) {
    return (
        <div className="listItem">
            <input type="checkbox" id={id} onChange={e => onChange(e)}/><label for={id}>{value}</label>
        </div>
    );
}

export default ListItem;