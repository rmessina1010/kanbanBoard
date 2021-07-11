import AddItem, { Hx } from './additem';

export default function DraggableList(props) {
    return (
        <div className={'drg-col'}>
            <Hx classes='drg-list-title' x={4} title={props.data.colTitle} />
            <ul className={'drg-list'}>
                {props.data.items.map(item => <DraggableItem data={item} key={'drg-item-' + item.id} />)}
            </ul>
            <AddItem />
        </div>
    );
}

export function DraggableItem(props) {
    return (
        <li class="drg-item">{props.data.item}</li>
    );
}
