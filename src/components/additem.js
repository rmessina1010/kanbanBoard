import React, { useState } from 'react';


export default function AddItem(props) {

    const [data, setData] = useState('');

    const pressSub = (e) => { if (e.code === 'Enter') { updateTarget(); } }
    const selfUpdate = e => { setData(e.target.value); }
    const updateTarget = () => {
        if (typeof props.update === 'function' && data.trim() !== '') {
            props.update(data);
            setData('');
        }
    }

    return (
        <div class="drg-add">
            <input name="add" value={data} onChange={(e) => selfUpdate(e)} onKeyUp={(e) => pressSub(e)} />
            <button type="button" onClick={updateTarget} >Add Item</button>
            <button type="reset" onClick={() => setData('')}>Clear</button>
        </div>
    )
}

