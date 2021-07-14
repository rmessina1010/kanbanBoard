import AddItem, { Hx } from './additem';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


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
            <DragDropContext>
                <Droppable droppableId={'drg-list' + props.data.id}>
                    {(provided) => {
                        return (<ul className={'drg-list'} ref={provided.innerRef} {...provided.droppableProps}>
                            {items.map((item, index) =>
                                <Draggable key={'drg-item-' + item.id} draggableId={'drg-item-' + item.id} index={index}>
                                    {(provided) => <li className="drg-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{item.item}</li>}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </ul>)
                    }}
                </Droppable>
            </DragDropContext>
            <AddItem update={appendItem} />
        </div >
    );
}