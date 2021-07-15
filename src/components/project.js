import { Hx } from './additem';
import DraggableList from './draggables';

export default function ProjectArea(props) {
    return (
        <div className="drag-proj">
            <Hx classes="proj-title" x={props.hx} title={props.data.title} />
            <div className="drg-area">
                {Object.keys(props.data.cols).map(key => <DraggableList data={props.data.cols[key]} key={'drg-col-' + props.data.cols[key].colId} />)}
            </div>
        </div>
    );
}