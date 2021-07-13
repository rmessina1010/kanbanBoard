import AddItem, { Hx } from './additem';
import React, { useState } from 'react';

export default function DraggableList(props) {

    let [items, setItems] = useState(props.data.items);
    let [next, setNext] = useState(props.data.next);
    const appendItem = (item) => {
        let newItem = {
            id: next,
            item,
            desc: '...',
            img: null,
            status: false,
        }
        setItems([...items, newItem]);
        setNext(next + 1);
    }

    return (
        <div className={'drg-col'}>
            <Hx classes='drg-list-title' x={4} title={props.data.colTitle} />
            <ul className={'drg-list'} onDragEnter={(e) => console.log(e.target)}>
                {items.map(item => <DraggableItem data={item} key={'drg-item-' + item.id} />)}
            </ul>
            <AddItem update={appendItem} />
        </div>
    );
}

export function DraggableItem(props) {
    return (
        <li className="drg-item" draggable={true} >{props.data.item}</li>
    );
}
