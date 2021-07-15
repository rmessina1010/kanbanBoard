import { useState } from 'react'

import { Hx } from './additem';
import DraggableList from './draggables';

export default function ProjectArea(props) {

    const [projectCols, setProjectCols] = useState(props.data.cols)
    const updater = (act, col, source, target) => {
        let newData = JSON.parse(JSON.stringify(projectCols));
        switch (act) {
            case 'add':
                source.id = newData[col].next;
                newData[col].next++;
                newData[col].items.push(source);
                break;
            case 'move':
                return;
            default:
                return;
        }
        setProjectCols(newData);
    }

    return (
        <div className="drag-proj">
            <Hx classes="proj-title" x={props.hx} title={props.data.title} />
            <div className="drg-area">
                {Object.keys(projectCols).map(key => <DraggableList data={projectCols[key]} updater={updater} colKey={key} key={'drg-col-' + projectCols[key].colId} />)}
            </div>
        </div>
    );
}