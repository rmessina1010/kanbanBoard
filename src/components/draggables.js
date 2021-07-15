import AddItem, { Hx } from './additem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


export default function DraggableList(props) {

    const appendItem = (item) => {
        props.updater('add', props.colKey, {
            item,
            desc: '...',
            img: null,
            status: false,
        })
    }

    const handleDragEnd = (res) => {
        props.updater('move', props.colKey, res.source, res.destination)
        return;
    }

    return (
        <div className={'drg-col'}>
            <Hx classes='drg-list-title' x={4} title={props.data.colTitle} />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId={'drg-list-' + props.data.colId}>
                    {(provided) => {
                        return (<ul className={'drg-list'} ref={provided.innerRef} {...provided.droppableProps}>
                            {props.data.items.map((item, index) =>
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