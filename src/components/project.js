import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { Hx } from './additem';
import DraggableList from './draggables';

export default function ProjectArea(props) {

    const [projectCols, setProjectCols] = useState(props.data.cols)
    const updater = (col, item) => {
        let newData = JSON.parse(JSON.stringify(projectCols));
        item.id = newData[col].next;
        newData[col].next++;
        newData[col].items.push(item);
        setProjectCols(newData);
    }

    const handleDragEnd = (res) => {
        let theItem = null;
        let newData = JSON.parse(JSON.stringify(projectCols));
        let sourceCol = res.source.droppableId.split('-').pop();
        [theItem] = newData[sourceCol].items.splice(res.source.index, 1);

        if (res.destination) {
            if (res.destination.droppableId === res.source.droppableId) {
                newData[sourceCol].items.splice(res.destination.index, 0, theItem);
            } else {
                let targCol = res.destination.droppableId.split('-').pop();
                newData[targCol].items.splice(res.destination.index, 0, theItem);
            }
        }

        setProjectCols(newData);
    }

    return (
        <div className="drag-proj">
            <Hx classes="proj-title" x={props.hx} title={props.data.title} />
            <div className="drg-area">
                <DragDropContext onDragEnd={handleDragEnd}>
                    {Object.keys(projectCols).map((key, index) => <DraggableList data={projectCols[key]} updater={updater} colKey={key} key={'drg-col-' + projectCols[key].colId} canAppend={typeof props.canAppend === 'function' ? props.canAppend(index, key, projectCols) : props.canAppend} />)}
                </DragDropContext>
            </div>
        </div>
    );
}