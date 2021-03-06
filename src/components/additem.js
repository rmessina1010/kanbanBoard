import React, { useState } from 'react';


export default function AddItem(props) {

    const [data, setData] = useState('');

    const pressSub = (e) => { if (e.code === 'Enter') { updateTarget(); } }
    const selfUpdate = e => { setData(e.target.value); }
    const updateTarget = () => {
        if (typeof props.update === 'function' && data.trim() !== '') {
            props.update(props.colKey, data);
            setData('');
        }
    }

    return (
        <div className="drg-add" >
            <input name="add" value={data} onChange={(e) => selfUpdate(e)} onKeyUp={(e) => pressSub(e)} />
            <button type="button" onClick={updateTarget} >Add Item</button>
            <button type="button" onClick={() => setData('')}>Clear</button>
            <button type="button" className="drg-add-tog" onClick={(e) => e.target.closest(".drg-add").classList.toggle('show-drg-add')}></button>
        </div>
    )
}

export function Hx(props) {
    let x = !isNaN(props.x) ? props.x * 1 : 4;
    x = x > 6 ? 6 : x;
    x = x < 1 ? 1 : x;
    let Header = `h${x}`;

    return props.title ? <Header className={props.classes || ''} >{props.title}</Header> : null;
}