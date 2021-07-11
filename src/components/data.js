const projects = [
    {
        id: 1,
        title: 'project1',
        type: null,
        open: true,
        cols: [
            {
                colTitle: 'one',
                colId: 1,
                next: 7,
                items: [{
                    id: 1,
                    item: 'item1',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                },
                {
                    id: 2,
                    item: 'item2',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                },
                {
                    id: 3,
                    item: 'item3',
                    desc: 'Lorem Ipsum',
                    img: null,
                    status: false,
                },
                {
                    id: 4,
                    item: 'item4',
                    desc: 'code improvement',
                    img: null,
                    status: false,
                },
                {
                    id: 5,
                    item: 'item5',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                },
                {
                    id: 6,
                    item: 'item6',
                    desc: 'bla blah',
                    img: null,
                    status: false,
                }]
            },

            {
                colTitle: 'two',
                colId: 2,
                items: []
            },
            {
                colTitle: 'three',
                colId: 3,
                items: []
            },
            {
                colTitle: 'four',
                colId: 4,
                items: []
            }
        ]
    },
    {
        id: 2,
        title: 'project2',
        type: null,
        open: true,
        cols: [
            {
                colTitle: 'one',
                colId: 2,
                next: 1,
                items: []
            }

        ]
    }

];

export default projects;