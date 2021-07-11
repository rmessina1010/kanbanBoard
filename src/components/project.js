import React from 'react';
import { Hx } from './additem';
import DraggableList from './draggables';

export default function ProjectArea(props) {
    return (
        <div className="drag-proj">
            <Hx classes="proj-title" x={props.hx} title={props.data.title} />
            <div className="drg-area">
                {props.data.cols.map(col => <DraggableList data={col} key={'drg-col-' + col.colId} />)}
            </div>
        </div>
    );
}