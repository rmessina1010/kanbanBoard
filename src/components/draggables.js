import AddItem, { Hx } from './additem';
import { Draggable, Droppable } from 'react-beautiful-dnd'


export default function DraggableList(props) {
    const appendItem = (item) => {
        props.updater(props.colKey, {
            item,
            desc: '...',
            img: null,
            status: false,
        })
    }

    return (
        <Droppable droppableId={'drg-list-' + props.data.colId}>
            {(provided) => {
                return (
                    <div className={'drg-col'}>
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
                        {props.canAppend ? <AddItem update={appendItem} /> : null}
                    </div>
                )
            }}
        </Droppable>
    );
}