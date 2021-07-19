import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import { Hx } from './additem';
import DraggableList from './draggables';

export default function ProjectArea(props) {

    const [projectData, setProjectData] = useState(props.data)
    const updater = (col, item) => {
        let newData = JSON.parse(JSON.stringify(projectData));
        item.id = newData.nextItem;
        newData.nextItem++;
        newData.cols[col].items.push(item);
        setProjectData(newData);
    }

    const handleDragEnd = (res) => {
        let theItem = null;
        let newData = JSON.parse(JSON.stringify(projectData));
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
    }

    return (
        <div className="drag-proj">
            <Hx classes="proj-title" x={props.hx} title={props.data.title} />
            <div className="drg-area">
                <DragDropContext onDragEnd={handleDragEnd}>
                    {Object.keys(projectData.cols).map((key, index) =>
                        <DraggableList
                            data={projectData.cols[key]}
                            updater={updater}
                            colKey={key}
                            key={'drg-col-' + projectData.cols[key].colId}
                            render={props.render}
                            canAppend={typeof props.canAppend === 'function' ? props.canAppend(0, key, projectData.cols) : props.canAppend}
                        />
                    )}
                </DragDropContext>
            </div>
        </div>
    );
}