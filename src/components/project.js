import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import AddItem, { Hx } from './additem';
import DraggableList from './draggables';

export default function ProjectArea(props) {

    const [projectData, setProjectData] = useState(props.data);

    const appendItem = (col, data) => {
        let item = {
            item: data,
            desc: '...',
            img: null,
            status: false,
        };
        let newData = JSON.parse(JSON.stringify(projectData));
        item.id = newData.nextItem;
        newData.nextItem++;
        newData.cols[col].items.push(item);
        setProjectData(newData);
    }

    const handleDragEnd = (res) => {
        let theItem = null;
        let newData = JSON.parse(JSON.stringify(projectData));
        if (res.type === 'items') {
            let sourceCol = res.source.droppableId.split('-').pop();
            [theItem] = newData.cols[sourceCol].items.splice(res.source.index, 1);
            if (res.destination) {
                if (res.destination.droppableId === res.source.droppableId) {
                    newData.cols[sourceCol].items.splice(res.destination.index, 0, theItem);
                } else {
                    let targCol = res.destination.droppableId.split('-').pop();
                    newData.cols[targCol].items.splice(res.destination.index, 0, theItem);
                }
            }
            setProjectData(newData);
            return;
        } else if (res.type === 'cols' && res.destination) {
            [theItem] = newData.colOrd.splice(res.source.index, 1);
            newData.colOrd.splice(res.destination.index, 0, theItem);
            setProjectData(newData);
            return;
        }
    }



    return (
        <div className="drag-proj">
            <Hx classes="proj-title" x={props.hx} title={props.data.title} />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="drg-area-cols" type="cols" direction="horizontal">
                    {(provided) => {
                        return (<div className="drg-area" ref={provided.innerRef} {...provided.droppableProps}>
                            {projectData.colOrd.map((key, index) =>
                                <Draggable key={'drg-col-' + key} draggableId={'drg-col-' + key} index={index}>
                                    {(provided) => {
                                        let canAppend = (typeof props.canAppend === 'function' ? props.canAppend(index, key, projectData.cols) : props.canAppend)
                                        return (
                                            <div className={'drg-col'} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <DraggableList
                                                    data={projectData.cols[key]}
                                                    colKey={key}
                                                    key={'drg-col-' + projectData.cols[key].colId}
                                                    render={props.render}
                                                />
                                                {canAppend ? <AddItem update={appendItem} colKey={key} /> : null}
                                            </div>);
                                    }}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </div>);
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    );
}