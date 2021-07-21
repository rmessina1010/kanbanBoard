import { Draggable, Droppable } from 'react-beautiful-dnd'
import { Hx } from './additem';

export default function DraggableList(props) {
    return (
        <Droppable droppableId={'drg-list-' + props.data.colId} type="items">
            {(provided) => {
                return (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <Hx classes='drg-list-title' x={4} title={props.data.colTitle} />
                        <ul className={'drg-list'} >
                            {props.data.items.map((item, index) =>
                                <Draggable key={'drg-item-' + item.id} draggableId={'drg-item-' + item.id} index={index}>
                                    {(provided) =>
                                        <li className="drg-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                            {typeof props.render === 'function' ? props.render(item, index) : item.item}
                                        </li>
                                    }
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </ul>
                    </div>
                )
            }}
        </Droppable>
    );
}