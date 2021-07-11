import React from 'react';


export default function ProjectArea(props) {
    const htag = props.htag || 3;
    const Header = `h${htag}`;
    return (
        <div className="drag-proj">
            <Header class="proj-title">{props.data.title}</Header>
        </div>
    );
}